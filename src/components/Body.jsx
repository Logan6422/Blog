

export default function Body({body_text = 'default', blog_title="undefined", img_src}){
    return(
      <div className="body border-t border-secondary flex flex-col items-center w-full max-w-4xl px-4 py-8">
        <h1 className="body-title text-2xl text-terciary pb-5">{blog_title}</h1>
        <p className="body-text text-sm text-justify text-secondary">{body_text}</p>
        <img src={img_src} alt="image-prueba" className="body-img w-40" />
      </div>  
    );
}