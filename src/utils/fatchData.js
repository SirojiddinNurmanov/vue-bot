export const fatchData = async (url) => {
    try {
        const response = await fetch(`${url}`);
        const data = await response.json();
        return url === "http://api.saadia.uz/api/products" ? data?.data : data;
    } catch (err) {
        return err.message;
    }

    // const res = await fetch(`${url}`);
    // const data = await res.json();
};
