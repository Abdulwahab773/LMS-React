import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AuthRoute />}>
          <Route index element={<LoginPage />} />
          <Route path="/Signup" element={<SingUpPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />

        <Route element={<PrivateRoute />}>
          <Route path="/UserDeshbord" element={<UserDeshbord />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
