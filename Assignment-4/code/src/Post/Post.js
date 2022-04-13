import PostFooter from "./PostFooter.1";
import PostHeader from "./PostHeader.1";
import PostImage from "./PostImage.1";

const Post = ({ config }) => {
    return <div className="PostContainer">
        <PostHeader config={config} />
        <PostImage config={config} />
        <PostFooter config={config} />

    </div>
};
export default Post;