import Header from "../components/Header";
import GlobalButton from "../components/global/GlobalButton";
import GlobalHeading from "../components/global/GlobalHeading";
import GlobalImageCard from "../components/global/GlobalImageCard";
import GlobalText from "../components/global/GlobalText";
import { events } from "../utils/helper";


export default function Home(): JSX.Element {
    return (
        <div className="max-w-[1600px] m-auto min-h-screen flex flex-col">

            <Header />

            <div className="w-full px-4 lg:px-[2.8rem] pb-9 sm:pb-11 lg:pb-14 space-y-4 sm:space-y-5 lg:space-y-7">

                <div className="pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-14 lg:pb-12">
                    <GlobalHeading
                        text="Start your journey with EventHero!"
                        className="text-center"
                    />
                </div>

                <div className="space-y-14 sm:space-y-16 lg:space-y-20">

                    <div className="space-y-2 flex md:block flex-col items-center">
                        <GlobalText
                            text="Get Started / Create Account"
                            className="text-center md:text-left"
                        />
                        <div className="flex items-center gap-2 lg:gap-3">
                            <GlobalButton
                                text="Ticket Seller"
                                onClick={() => alert("Ticket Seller!")}
                                theme="primary"
                                hovered
                            />
                            <GlobalButton
                                text="Ticket Buyer"
                                onClick={() => alert("Ticket Buyer!")}
                                theme="primary"
                                hovered
                            />
                        </div>
                    </div>

                    <div className="space-y-2 sm:space-y-5">
                        <GlobalHeading
                            text="Upcoming Events"
                            className="text-center md:text-left !text-black"
                            size="medium"
                        />
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2">
                            {
                                events
                                    .map((item: any, index: number) => (
                                        <GlobalImageCard
                                            imageSrc="https://cdn.britannica.com/29/150929-050-547070A1/lion-Kenya-Masai-Mara-National-Reserve.jpg"
                                            title={item.title}
                                            desciption={item.description}
                                            key={index}
                                        />
                                    ))
                            }
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}