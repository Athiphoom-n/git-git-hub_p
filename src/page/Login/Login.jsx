import { useState } from "react";
import "/Users/no_im_north/Desktop/learn_Test/src/img/bg_hero.svg";
import womanImg from "/Users/no_im_north/Desktop/learn_Test/src/img/woman_hero.png";
import { BsBag } from "react-icons/bs";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
    // Add API call here
  };

  return (
    <div>
      <div className="flex h-screen p-14 items-center justify-center bg-amber-100">
        <div className="w-full flex flex-col lg:flex-row max-w-3xl p-8 space-y-6 bg-white rounded-xl shadow-md justify-evenly">
          <div className="flex-1 flex justify-center items-center lg:block container">
            <img className="w-[200px] " src={womanImg} alt="" />
          </div>
          <div className="flex-1 h-full my-auto hover lg:block">
            <div className="hover lg:block">
              <BsBag className="text-5xl mx-auto mb-7" />
            </div>
            <h2 className="text-2xl font-bold text-center text-gray-700">
              Login
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-indigo-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-indigo-300"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full p-2 text-white bg-gray-800 rounded-lg hover:bg-black"
              >
                Login
              </button>
            </form>
            <p className="text-sm text-center text-gray-600">
              Don't have an account?{" "}
              <a href="/register" className="text-indigo-500">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
