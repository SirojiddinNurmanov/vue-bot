export const filterBlog = (key, arr) => {
    let isArr = typeof key !== "string" ? true : false;
    var sorted = isArr
        ? key
              .map(function (value) {
                  return value.toLowerCase();
              })
              .sort()
        : [key.toLowerCase()];
    console.log(arr);

    return true;
    // arr &&
    // arr.filter((arr) =>
    //     arr.category_name.find((e) =>
    //         sorted.join(",").toLowerCase().includes(e.toLowerCase())
    //     )
    // )
};
