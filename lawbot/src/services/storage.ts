import { EncryptionService } from './encryption';

export interface StoredMessage extends Message {
  caseId?: string;
  metadata?: {
    caseType: string;
    confidence: number;
    timestamp: string;
  };
}

export class MessageStorage {
  static async saveMessage(message: StoredMessage, encryptionKey: CryptoKey): Promise<void> {
    try {
      const encryptedContent = await EncryptionService.encryptMessage(
        JSON.stringify(message),
        encryptionKey
      );

      // Store in localStorage for now, can be replaced with database
      const messages = JSON.parse(localStorage.getItem('chatMessages') || '[]');
      messages.push({
        ...message,
        content: encryptedContent
      });
      localStorage.setItem('chatMessages', JSON.stringify(messages));
    } catch (error) {
      console.error('Error saving message:', error);
    }
  }

  static async loadMessages(encryptionKey: CryptoKey): Promise<StoredMessage[]> {
    try {
      const messages = JSON.parse(localStorage.getItem('chatMessages') || '[]');
      return await Promise.all(
        messages.map(async (message: StoredMessage) => ({
          ...message,
          content: await EncryptionService.decryptMessage(message.content, encryptionKey)
        }))
      );
    } catch (error) {
      console.error('Error loading messages:', error);
      return [];
    }
  }

  static async clearMessages(): Promise<void> {
    localStorage.removeItem('chatMessages');
  }
}