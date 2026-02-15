import multer from "multer";

// Here, we need to mention the variable name as storage only. Otherwise, it won't work.
const storage = multer.diskStorage({
    filename:function(req, file, callback) {
        callback(null, file.originalname)
    }
});

const upload = multer({storage});

export default upload;