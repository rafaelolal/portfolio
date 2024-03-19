import AchievementForm from "../components/forms/achievement-form";
import PostForm from "../components/forms/post-form";

export default function NewPage() {
  return (
    <div className="container">
      <PostForm />
      <AchievementForm />
    </div>
  );
}
