import { useNavigate } from "react-router-dom";
import { events } from "../utils/helper";
import Header from "../components/Header";
import GlobalButton from "../components/global/GlobalButton";
import GlobalHeading from "../components/global/GlobalHeading";
import GlobalImageCard from "../components/global/GlobalImageCard";
import GlobalText from "../components/global/GlobalText";


export default function Page(): JSX.Element {
    const navigate = useNavigate();


    return (
        <>

            <Header />

            <div className="px-4 lg:px-[2.8rem] pb-9 sm:pb-11 lg:pb-14 space-y-4 sm:space-y-5 lg:space-y-7 w-full">

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
                                className="!py-2 lg:!py-1.5 !px-4 lg:!px-3.5"
                                onClick={() => navigate('/auth/signup?type=ticket-seller')}
                                theme="primary"
                                hovered
                            />
                            <GlobalButton
                                text="Ticket Buyer"
                                className="!py-2 lg:!py-1.5 !px-4 lg:!px-3.5"
                                onClick={() => navigate('/auth/signup?type=ticket-buyer')}
                                theme="primary"
                                hovered
                            />
                        </div>
                    </div>

                    <div className="space-y-2 sm:space-y-5">
                        <GlobalHeading
                            text="Upcoming Events"
                            className="text-center md:text-left !text-primary"
                            size="medium"
                        />
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2">
                            {
                                events
                                    .map((item: any, index: number) => (
                                        <GlobalImageCard
                                            key={index}
                                            imageSrc={item.imageSrc}
                                            title={item.title}
                                            desciption={item.description}
                                        />
                                    ))
                            }
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}