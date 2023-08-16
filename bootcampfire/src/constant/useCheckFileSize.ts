function useCheckFileSize (size: number) {
    if (size > 5 * 1024 * 1024) {
        return false;
    }
    return true;
}

export default useCheckFileSize;