
// Add Product
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body;
        // const image1 = req.files.image1 && req.files.image1[0];
        // const image2 = req.files.image2 && req.files.image2[0];
        // const image3 = req.files.image3 && req.files.image3[0];
        // const image4 = req.files.image4 && req.files.image4[0];
        const image1 = req.files?.image1?.[0] || null;
        const image2 = req.files?.image2?.[0] || null;
        const image3 = req.files?.image3?.[0] || null;
        const image4 = req.files?.image4?.[0] || null;

        const images = [image1, image2, image3, image4].filter((item) => item !== null)

        console.log(name, description, price, category, subCategory, sizes, bestseller);
        console.log(images);
        res.json({});
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        });
    }
}

// List Products
const listProducts = async (req, res) => {

}

// Remove Product
const removeProduct = async (req, res) => {

}

// Single Product Info
const singleProduct = async (req, res) => {

}

export { addProduct, listProducts, removeProduct, singleProduct }