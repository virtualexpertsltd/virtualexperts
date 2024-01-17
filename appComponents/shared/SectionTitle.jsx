export default function SectionTitle({ title, underlined, colored }) {
  let convertedText = title
    .replace(underlined, `<span class="styled-underline">${underlined}</span>`)
    .replace(colored, `<span class="bg-primary text-white">${colored}</span>`);

  return (
    <h2
      className="font-bold text-center mb-10"
      dangerouslySetInnerHTML={{ __html: convertedText }}
    ></h2>
  );
}
