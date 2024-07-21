import express from "express";
const router = express.Router();
import Blog from '../models/Blog';

//Crear un nuevo post
router.post('/new_blog',async(req,res) => {
    const {title,content,assets} = req.body;
    try {
        const newBlog = new Blog({title,content,assets});
        await newBlog.save();
        req.status(201).json(newBlog);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find(); 
        res.status(200).json(blogs); // Enviar los blogs como respuesta en formato JSON
    } catch (error) {
        res.status(500).json({ message: error.message }); // Manejo de errores
    }
});

// Obtener un blog específico por ID
router.get('/:id', async (req, res) => {
    const blogId = req.params.id;

    try {
        const blog = await Blog.findById(blogId);

        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


export default router;