import { useState } from "react";

export default function AddBlog() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [assets, setAssets] = useState("");

    return (
        <div className="grid grid-cols-2 h-screen w-screen pt-10 overflow-x-hidden">
            <form action="new_blog" className="flex flex-col gap-5 w-full max-w-xl px-4">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="blog-title h-10 border border-gray-300 rounded-md px-3 py-2 w-full"
                    placeholder="Title"
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="blog-content h-60 border border-gray-300 rounded-md px-3 py-2 w-full"
                    placeholder="Content"
                />
                <input
                    type="text"
                    value={assets}
                    onChange={(e) => setAssets(e.target.value)}
                    className="blog-assets h-10 border border-gray-300 rounded-md px-3 py-2 w-full"
                    placeholder="Assets"
                />
                <button
                    type="submit"
                    className="blog-submit bg-blue-500 text-white px-4 py-2 rounded-md w-full"
                >
                    Create
                </button>
            </form>

            <div className="flex flex-col justify-start items-center w-full h-full px-4 text-secondary">
                <div className="flex flex-col gap-5 w-full max-w-md">
                    <div className="preview border border-gray-300 rounded-md p-4">
                        <div className="preview-title text-lg font-semibold mb-2 break-words">{title || "Title"}</div>
                        <div className="preview-content break-words">{content || "Content"}</div>
                        <div className="preview-assets mt-2 break-words">{assets || "Assets"}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
