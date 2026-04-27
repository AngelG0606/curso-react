import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
        <div className="flex justify-center items-center gap-10">
            <div>
                <h1>Soy un Layout</h1>
            </div>

            <div className="space-y-10">
                <Outlet />
            </div>
        </div>
    </>
  )
}
