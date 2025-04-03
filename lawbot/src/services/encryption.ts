import { Buffer } from 'buffer';

export class EncryptionService {
  private static readonly ALGORITHM = 'AES-GCM';
  private static readonly KEY_LENGTH = 256;

  static async generateKey(): Promise<CryptoKey> {
    return await window.crypto.subtle.generateKey(
      {
        name: this.ALGORITHM,
        length: this.KEY_LENGTH
      },
      true,
      ['encrypt', 'decrypt']
    );
  }

  static async encryptMessage(message: string, key: CryptoKey): Promise<string> {
    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    const encodedMessage = new TextEncoder().encode(message);

    const encryptedData = await window.crypto.subtle.encrypt(
      {
        name: this.ALGORITHM,
        iv
      },
      key,
      encodedMessage
    );

    const encryptedArray = new Uint8Array(encryptedData);
    return Buffer.from(iv).toString('base64') + 
           ':' + 
           Buffer.from(encryptedArray).toString('base64');
  }

  static async decryptMessage(encryptedMessage: string, key: CryptoKey): Promise<string> {
    const [ivString, dataString] = encryptedMessage.split(':');
    const iv = Buffer.from(ivString, 'base64');
    const data = Buffer.from(dataString, 'base64');

    const decryptedData = await window.crypto.subtle.decrypt(
      {
        name: this.ALGORITHM,
        iv
      },
      key,
      data
    );

    return new TextDecoder().decode(decryptedData);
  }
}