function Avatar({ url, className }) {
    return (
        <img
            loading="lazy"
            src={url}
            alt='avatar-img'
            className={`h-10 w-12 rounded-full cursor-pointer 
            transition duration-150 transform hover:scale-110 
            hover:animate-bounce ${className}`}
        />
    );
}

export default Avatar;