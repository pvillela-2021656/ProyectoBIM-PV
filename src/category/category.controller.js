import Category from "./category.model.js";

export const newCategory = async (req, res) => {
    try {
        const data = req.body;
        //Metodo de creación de category
        const category = new Category({
            ...data,
        });
        await category.save();
        //Resultado exitoso:
        res.status(200).json({
            success: true,
            message: "Process successfull.",
            category
        });
    } catch (error) {
        res.status(500).json({//Error interno del servidor
            scucess: false,
            message: "There was a mistake in the making of this category."
        })
    }
}

export const deleteCategory = async (req, res ) => {
    
}