function useGetHeader() {
    const accessToken = localStorage.getItem("Authorization");

    const header = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
    }

    return header;
}

export default useGetHeader;