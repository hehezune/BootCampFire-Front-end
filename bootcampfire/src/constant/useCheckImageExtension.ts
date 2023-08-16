function useCheckImageExtension(fileName: string | undefined) {
    if (!fileName) return false;
    const imageExtensions = ['jpg', 'png', 'jpeg', 'gif', 'png'];
    const loweredFileName = fileName.toLowerCase();
    return imageExtensions.some((element) => 
        loweredFileName === element)
}

export default useCheckImageExtension;