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

export const request = async (
    url,
    method,
    body,
    headerData,
    formDataStatus
) => {
    try {
        const response = await fetch(url, {
            method,
            body: JSON.stringify(body),
            headers: {
                ...headerData,
                "Content-Type": formDataStatus
                    ? "application/x-www-form-urlencoded"
                    : "application/json",
            },
        });

        const data = await response.json();

        return data;
    } catch (err) {
        return err.message;
    }
};
// export const getsCarts = async (url, headers) => {
//     // Simple POST request with a JSON body using fetch
//     const requestOptions = {
//         method: "POST",
//         headers,
//     };
//     await fetch(url, requestOptions)
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data);
//             return data;
//         });
// };
