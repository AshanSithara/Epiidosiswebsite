import BlogPage from "../../../components/Blog/BlogPage";

export default function Page({ params }: { params: { id: string } }) {
  return <BlogPage params={params} />;
}
