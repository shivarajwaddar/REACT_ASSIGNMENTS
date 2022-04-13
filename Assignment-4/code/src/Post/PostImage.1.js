export const PostImage = ({ config }) => {
    const relativeImageURL = `../assets/${config.PostImage}`;
    return (
        <div className="PostImage">
            <img src={relativeImageURL} alt={config.description} />
        </div>
    );
};

export default PostImage;
