import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
export const PostFooter = ({ config }) => {
    const postedOnDate = new Date(config.date),
        postedOn = `${postedOnDate.getDate()} ${MonthNames[postedOnDate.getMonth()]} ${postedOnDate.getFullYear()}`;

    return (
        <div className="PostFooter">
            <div className="PostDetails">
                <div className="LikeShareWrapper">
                    <div className="LikrShareContainer">
                        <button className="LikeButton">
                            <FavoriteBorderIcon />
                        </button>
                        <button className="ShareButton">
                            <SendOutlinedIcon />
                        </button>
                    </div>
                    <div className="likes">{config.likes}  likes</div>
                </div>
                <div className="PostOn">{postedOn}</div>
            </div>
            <div className="PostCaption">{config.description}</div>
        </div>
    );
};

const MonthNames = ["jan", "feb", "march", "april", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
export default PostFooter
