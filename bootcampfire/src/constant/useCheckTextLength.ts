function useCheckTextLength(type: number, input: string) {
    const [TITLE, CONTENT] = [0, 1];
    if (type === TITLE && input.length > 100) return false;
    else if (type === CONTENT && input.length > 254) return false;
    return true;
}

export default useCheckTextLength;