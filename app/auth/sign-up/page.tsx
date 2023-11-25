"use client";

import { userAuth } from "@/context/UserAuthContext";
import { UploadButton } from "@/utils/uploadthing";
import "@uploadthing/react/styles.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState<string | null>();
  const [isDisabled, setIsDisabled] = useState(true);
  const [showPopUp, setShowPopUp] = useState(false);
  const [isRegistring, setIsRegistring] = useState(false);
  const [imageUploading, setImageUploading] = useState(false);

  const { googleSignIn, user, signUp } = userAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  const handleLoginWithGoogle = async () => {
    await googleSignIn();
  };

  const handleSignUpWithEmail = async (e: any) => {
    e.preventDefault();
    setIsRegistring(true);
    try {
      await signUp(firstName, lastName, email, password, avatar);
      toast.success("Account successfully created");
    } catch (error) {
      toast.error("Something went wrong!");
      setShowPopUp(false);
      setAvatar(null);
      setPassword("");
      setConfirmPassword("");
    } finally {
      setIsRegistring(false);
    }
  };

  const handleShowPopUp = async (e: any) => {
    e.preventDefault();
    if (firstName && lastName && email && password && confirmPassword) {
      if (password == confirmPassword) {
        setShowPopUp(true);
      } else {
        toast.error("Password not match!");
      }
    } else {
      toast.error("Please provided the required information!");
    }
  };

  useEffect(() => {
    if (avatar) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [avatar]);

  const btnComingSoon = (provider: string) => {
    toast.info(`Sign in with ${provider} coming soon!`);
  };

  return (
    <main className="w-full min-h-screen h-full grid place-items-center p-3 relative">
      {showPopUp && (
        <div className="absolute inset-0 bg-neutral-800 bg-opacity-70 grid place-items-center z-[1000]">
          <div className="animation-fade-in bg-white w-full max-w-md p-8 rounded-xl border-2 border-r-4 border-b-4 border-neutral-800 flex flex-col relative">
            <h2 className="text-2xl font-bold text-neutral-800 text-center mb-1">
              Upload an avatar
            </h2>
            <div className="w-24 h-24 rounded-full bg-neutral-200 overflow-hidden self-center relative group mb-3">
              {/* <input
                onChange={(e) => setAvatar(e.target.files![0])}
                type="file"
                accept="image/*"
                className="opacity-0 absolute inset-0 z-[100] cursor-pointer"
              /> */}
              <img
                src={
                  avatar
                    ? avatar
                    : "http://www.marketingtool.online/en/face-generator/img/faces/avatar-1151a33d40edd22fd2ad4fc694eda9bf.jpg"
                }
                alt=""
                className="w-full h-full object-cover object-center"
              />
              {imageUploading && (
                <div className="w-full h-full absolute inset-0 transition-all duration-300 flex items-center justify-center bg-neutral-800/70">
                  <img
                    src="/assets/icons/loading-primary.svg"
                    alt="Upload Icon"
                    className="w-6 animate-spin"
                  />
                </div>
              )}
            </div>
            <div className="w-full flex items-center justify-center mb-6">
              <UploadButton
                appearance={{
                  button({ ready, isUploading }) {
                    return `custom-button ${
                      ready ? "custom-button-ready" : "custom-button-not-ready"
                    } ${isUploading ? "is-uploading" : ""}`;
                  },
                  container: "custom-container",
                  allowedContent: "custom-allowed-content",
                }}
                className="upload-btn"
                endpoint="avatarUpload"
                onUploadProgress={() => {
                  setImageUploading(true);
                }}
                onClientUploadComplete={(res) => {
                  setAvatar(res[0]?.url);
                  setImageUploading(false);
                }}
                onUploadError={(error: Error) => {
                  // Do something with the error.
                  toast.error("Something went wrong!");
                }}
                onUploadBegin={() => {
                  setAvatar("");
                }}
                content={{
                  button({ ready }) {
                    if (ready) return <div>Upload Avatar</div>;
                    return (
                      <img
                        src="/assets/icons/loading-primary.svg"
                        alt="Loading Icon"
                        className="w-6 animate-spin"
                      />
                    );
                  },
                }}
              />
            </div>
            <button
              onClick={handleSignUpWithEmail}
              disabled={isDisabled}
              className="h-12 bg-primary border-2 border-b-4 border-r-4 border-neutral-800 text-neutral-800 rounded-md font-semibold transition-all duration-200 active:scale-95 mb-4 disabled:opacity-80 disabled:cursor-not-allowed"
            >
              Continue
            </button>
            <div className="flex items-center justify-center h-10">
              {isRegistring ? (
                <img
                  src="/assets/icons/loading-primary.svg"
                  alt="Loading Icon"
                  className="w-8 animate-spin"
                />
              ) : (
                <button
                  onClick={handleSignUpWithEmail}
                  className="text-primary self-center w-[fit-content]"
                >
                  Skip {">>"}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="w-full max-w-xl mx-auto p-5 sm:p-8 rounded-xl border-2 border-r-4 border-b-4 border-neutral-800 flex flex-col">
        <a href="/" className="self-center mb-4">
          <img src="/assets/images/logo-png.png" className="w-12" alt="Logo" />
        </a>
        <h3 className="text-center text-2xl font-bold text-neutral-800 mb-3">
          Create a new account
        </h3>
        <p className="text-neutral-800/80 text-center mb-5">
          Enter the required* information to create your new account.
        </p>
        <form onSubmit={handleShowPopUp} className="w-full flex flex-col gap-3">
          <div className="grid-rows-1 sm:grid-cols-2 grid gap-3">
            <input
              type="text"
              className="h-12 w-full border-2 border-neutral-800 border-b-4 border-r-4 rounded-md px-3"
              placeholder="First Name*"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            <input
              type="text"
              className="h-12 w-full border-2 border-neutral-800 border-b-4 border-r-4 rounded-md px-3"
              placeholder="Last Name*"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </div>
          <input
            type="email"
            className="h-12 w-full border-2 border-neutral-800 border-b-4 border-r-4 rounded-md px-3"
            placeholder="Email Address*"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="grid-rows-1 sm:grid-cols-2 grid gap-3">
            <input
              type="password"
              className="h-12 w-full border-2 border-neutral-800 border-b-4 border-r-4 rounded-md px-3"
              placeholder="Password*"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <input
              type="password"
              className="h-12 w-full border-2 border-neutral-800 border-b-4 border-r-4 rounded-md px-3"
              placeholder="Confirm Password*"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </div>
          <button className="h-12 bg-primary border-2 border-b-4 border-r-4 border-neutral-800 text-neutral-800 rounded-md font-semibold transition-all duration-200 active:scale-95">
            Continue
          </button>
        </form>
        <div className="w-full py-5 flex items-center gap-3">
          <div className="h-px bg-gray-300 flex-1"></div>
          <span className="text-xs text-neutral-300 font-semibold">
            OR SIGN UP WITH
          </span>
          <div className="h-px bg-gray-200 flex-1"></div>
        </div>
        <div className="grid grid-cols-3 items-center gap-3 mb-6">
          <button
            onClick={handleLoginWithGoogle}
            title="Sign in with Google"
            className="w-full h-20 border-2 flex items-center justify-center border-neutral-800 border-b-4 border-r-4 rounded-md transition-all duration-200 active:scale-95"
          >
            <img
              src="/assets/icons/google.svg"
              className="w-12"
              alt="Google Icon"
            />
          </button>
          <button
            onClick={() => btnComingSoon("Facebook")}
            title="Sign in with Facebook"
            className="w-full h-20 border-2 flex items-center justify-center border-neutral-800 border-b-4 border-r-4 rounded-md transition-all duration-200 active:scale-95"
          >
            <img
              src="/assets/icons/facebook.svg"
              className="w-7"
              alt="Google Icon"
            />
          </button>
          <button
            onClick={() => btnComingSoon("GitHub")}
            title="Sign in with GitHub"
            className="w-full h-20 border-2 flex items-center justify-center border-neutral-800 border-b-4 border-r-4 rounded-md transition-all duration-200 active:scale-95"
          >
            <img
              src="/assets/icons/github.svg"
              className="w-8"
              alt="Google Icon"
            />
          </button>
        </div>
        <span className="text-center text-neutral-800 flex items-center gap-2 justify-center">
          Already have an account?
          <a
            href="/auth/login"
            className="underline underline-offset-2 font-semibold"
          >
            Sign In
          </a>
        </span>
      </div>
    </main>
  );
};

export default SignUpPage;
