import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cedar Hills 12th Ward</title>
        <meta name="google-site-verification" content="kekXZ_ccDIzDvEUeqt590S1NCj5iPy28xqM6G3cn19U" />
      </Head>
      <div
        className=""
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/1280x800/accra-ghana-temple-758797-wallpaper.jpg')",
        }}
      >
        <div className="hero text-center">
          <div className="main-hero-text">
            <h2>Welcome to the Cedar Hills 12th Ward</h2>
            <Link
              className="btn btn-lg btn-secondary mt-3 mr-2"
              href="/sacrament"
            >
              Sacrament
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-4 mb-5 shadow p-3 mb-5 bg-white rounded">
          <div className="col-md-6">
            <Image
              className="img-fluid"
              src="https://assets.ldscdn.org/25/5a/255ae4830a02857fb7555d7c6d5ee8f2dd989db0/jesus_fulfillment_isaiahs_prophecy.jpeg"
              alt=""
              width="500"
              height="500"
            />
          </div>
          <div className="col-md-6 text-center">
            <h3>How to host a meeting</h3>
            <p>
              By using the software zoom, you will have the ability to broadcast
              up to 40 minutes with up to 100 participants per broadcast.
            </p>
            <Link
              href="/zoom-instructions"
              className="btn btn-lg btn-secondary"
            >
              Instructions
            </Link>
          </div>
        </div>

        <div
          className="row mb-5 shadow p-3 mb-5 bg-white rounded"
          style={{ marginTop: "100px", paddingBottom: "100px" }}
        >
          <div className="d-md-none">
            <Image
              className="img-fluid"
              src="https://assets.ldscdn.org/d0/1e/d01e054d469ddbd74cccfe0436617470c887dcce/portugal_sisters_missionaries_work_missionary.jpeg"
              alt=""
              width="500"
              height="500"
            />
          </div>
          <div className="col-md-6 text-center">
            <h3>Attending a Meeting</h3>
            <p>
              Every meeting is setup so you can click on the link to enter the
              meeting. If you are using zoom for the first time, it will prompt
              you to install the software. Zoom is supported on the following
              devices: Windows, Mac, iOS, and Android
            </p>
          </div>
          <div className="col-md-6 d-md-block d-none">
            <Image
              className="img-fluid"
              src="https://assets.ldscdn.org/d0/1e/d01e054d469ddbd74cccfe0436617470c887dcce/portugal_sisters_missionaries_work_missionary.jpeg"
              alt=""
              width="500"
              height="500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
