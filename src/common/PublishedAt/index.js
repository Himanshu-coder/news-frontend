import { latestNews } from "../../lib/constants";

const PublishedAt = ({ dateString }) => (
    <div>
        {latestNews?.publishedAt}
        {new Date(dateString).toLocaleString()}
    </div>
);

export default PublishedAt;
