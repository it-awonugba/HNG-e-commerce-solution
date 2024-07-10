import FeaturedMenu from "../Menu/FeaturedMenu";
import Recommendation from "../Recommendation/Recommendation";

export default function Payment() {
  return (
    <>
      <section>
        <FeaturedMenu />
      </section>
      <div className="mt-2 mb-16">
        <Recommendation />
      </div>
    </>
  );
}
