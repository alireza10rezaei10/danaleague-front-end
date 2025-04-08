const SimpleSection = ({ id, title, description, list, items }) => (
  <section
    id={id}
    className="scroll-mt-24 bg-white p-6 rounded-2xl shadow-md space-y-4 border border-gray-200"
  >
    {title && (
      <h2 className="text-2xl font-bold text-[var(--primary-color)] border-r-4 border-[var(--primary-color)] pr-3">
        {title}
      </h2>
    )}
    {description && (
      <p className="text-gray-700 leading-relaxed whitespace-pre-line text-justify">
        {description}
      </p>
    )}
    {list && (
      <ul className="list-disc pr-5 text-right space-y-2 text-gray-800">
        {list.map((item, idx) => (
          <li key={idx} className="leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    )}
    {items && (
      <ul className="space-y-4 text-right">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="bg-gray-50 p-4 rounded-lg border border-gray-200"
          >
            <p className="font-semibold text-lg text-[var(--primary-color)] mb-1">
              {item.TITLE}
            </p>
            <p className="text-gray-700">{item.DESCRIPTION}</p>
          </li>
        ))}
      </ul>
    )}
  </section>
);

export default SimpleSection;
