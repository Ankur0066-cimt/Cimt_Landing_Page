import { Navigate, Route, Routes } from 'react-router-dom';
import BlogIndexPage from './pages/Blogs/BlogIndexPage';
import BlogPostPage from './pages/Blogs/BlogPostPage';
// MODULE_BLOG_IMPORTS_START
// MODULE_BLOG_IMPORTS_END


const BlogRoutes = () => (
  <Routes>
    <Route index element={<BlogIndexPage />} />
    <Route path=":slug" element={<BlogPostPage />} />
    {/* MODULE_BLOG_ROUTES_START */}
    {/* MODULE_BLOG_ROUTES_END */}
    <Route path="*" element={<Navigate to="/blog/" replace />} />
  </Routes>
);

export default BlogRoutes;
