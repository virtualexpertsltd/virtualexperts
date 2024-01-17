import SectionTitle from "@/appComponents/shared/SectionTitle";

export default function Expectation() {
  return (
    <section className="section pb-20">
      <div className="container">
        <SectionTitle
          title="What You Can Expect from Our Experienced Design Team?"
          colored="Experienced Design Team?"
        />
        <div className="grid grid-cols-2 gap-8">
          <div className="col-span-1 space-y-5">
            <ul className="space-y-3 *:text-2xl *:font-medium *:text-dark">
              <li>Enhanced Main/Hero Image</li>
              <li>Infographic/Feature Image</li>
              <li>Lifestyle/Action Image</li>
              <li>Comparison Chart with other products</li>
              <li>Product Dimensions Image</li>
              <li>Adding Shadows and Reflections</li>
              <li>Lighting and Color Adjustments</li>
              <li>Image editing and retouching</li>
            </ul>
            <button className="btn btn-black">Order Now</button>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </section>
  );
}
