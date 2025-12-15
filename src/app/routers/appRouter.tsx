import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from "@app/layout";
import { HomePage } from "@pages/homePage"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/*<Route path="contact" element={<Contact />} />*/}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}