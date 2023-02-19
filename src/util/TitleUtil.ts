export const DEFAULT_TITLE = 'New Chat';

export const createTitle = (text: string) => {
    const maxLength = 40;
    const isTooLong = text.length > maxLength
    return text.substring(0, maxLength) + (isTooLong ? '...' : '');
};