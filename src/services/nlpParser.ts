
interface ParsedTransaction {
  type: 'income' | 'expense';
  item?: string;
  quantity?: number;
  unit_price?: number;
  amount: number;
  date?: string;
}

export class NLPParser {
  static parseNaturalLanguage(input: string): ParsedTransaction | null {
    if (!input || input.trim().length === 0) return null;

    const text = input.toLowerCase().trim();
    
    // Determine transaction type
    const isIncome = this.detectIncomeKeywords(text);
    const type = isIncome ? 'income' : 'expense';
    
    // Extract amount and pricing information
    const amountInfo = this.extractAmountInfo(text);
    if (!amountInfo.amount) return null;
    
    // Extract item/product name
    const item = this.extractItem(text, type);
    
    // Extract or default date
    const date = this.extractDate(text) || '2025-05-24';
    
    const result: ParsedTransaction = {
      type,
      amount: amountInfo.amount,
      date
    };
    
    if (item) result.item = item;
    if (amountInfo.quantity) result.quantity = amountInfo.quantity;
    if (amountInfo.unit_price) result.unit_price = amountInfo.unit_price;
    
    return result;
  }
  
  private static detectIncomeKeywords(text: string): boolean {
    const incomeKeywords = [
      'sold', 'sale', 'earned', 'received', 'payment', 'income',
      'revenue', 'profit', 'made', 'got paid', 'customer paid'
    ];
    
    return incomeKeywords.some(keyword => text.includes(keyword));
  }
  
  private static extractAmountInfo(text: string): {
    amount?: number;
    quantity?: number;
    unit_price?: number;
  } {
    // Pattern for "X items at Y each" or "X items for Y total"
    const quantityPricePattern = /(\d+)\s+(?:pieces?|items?|loaves?|crates?|bottles?|bags?|boxes?|units?)?\s*(?:of\s+)?[\w\s]*?(?:at|for)\s+(\d+(?:\.\d{2})?)\s*(?:each)?/i;
    const match = text.match(quantityPricePattern);
    
    if (match) {
      const quantity = parseInt(match[1]);
      const unitPrice = parseFloat(match[2]);
      return {
        quantity,
        unit_price: unitPrice,
        amount: quantity * unitPrice
      };
    }
    
    // Simple amount extraction
    const amountPattern = /(?:for|at|cost|paid|worth)\s+(\d+(?:\.\d{2})?)|(\d+(?:\.\d{2})?)\s*(?:dollars?|bucks?|$)/i;
    const simpleMatch = text.match(amountPattern);
    
    if (simpleMatch) {
      const amount = parseFloat(simpleMatch[1] || simpleMatch[2]);
      return { amount };
    }
    
    // Last resort: find any number
    const numberMatch = text.match(/(\d+(?:\.\d{2})?)/);
    if (numberMatch) {
      return { amount: parseFloat(numberMatch[1]) };
    }
    
    return {};
  }
  
  private static extractItem(text: string, type: 'income' | 'expense'): string | undefined {
    // Remove common transaction words
    let cleanText = text.replace(/(sold|bought|paid|for|spent|received|earned|at|each|today|yesterday)/gi, ' ');
    
    // Remove numbers and currency
    cleanText = cleanText.replace(/\d+(?:\.\d{2})?/g, ' ');
    
    // Extract meaningful words
    const words = cleanText.split(/\s+/).filter(word => 
      word.length > 2 && 
      !['the', 'and', 'for', 'with', 'from'].includes(word.toLowerCase())
    );
    
    if (words.length > 0) {
      return words.slice(0, 2).join(' ').trim();
    }
    
    return type === 'income' ? 'sales' : 'purchase';
  }
  
  private static extractDate(text: string): string | undefined {
    if (text.includes('yesterday')) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      return yesterday.toISOString().split('T')[0];
    }
    
    if (text.includes('today') || text.includes('now')) {
      return '2025-05-24';
    }
    
    // Could add more sophisticated date parsing here
    return undefined;
  }
}
