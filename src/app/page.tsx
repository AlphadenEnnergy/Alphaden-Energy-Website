import Subnav from "@/components/subnav";
import Navbar from "@/components/navbar";
import { Button } from "@/components/buttons";
import { BiRightArrowAlt } from "react-icons/bi";
import Footer from "@/components/footer";
import LocationMap from "@/components/home/LocationMap";

export default function Page({ children }: any) {
  return (
    <main className="flex min-h-screen flex-col justify-between ">
      <div>
        <nav>
          <Subnav />
          <Navbar />
        </nav>

        <div className="hero z-10 w-full items-center justify-between text-sm lg:flex">
          <div className=" w-full flex flex-col justify-center items-center">
            <div className="z-40 max-w-5xl my-40 h-40 flex flex-col justify-center items-start px-8 md:h-80">
              <h1 className="text-white text-3xl leading-tight font-bold md:text-5xl">
                Providing the most efficient dynamic processes using business
                intelligence, technology and innovation.
              </h1>
              <div className="mt-4">
                <Button>
                  <span>Learn More</span>
                  <BiRightArrowAlt className="ml-2 text-xl" />{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <LocationMap />
      </div>

      <footer>
        <Footer />
      </footer>
    </main>
  );
}
