import React ,{useState} from 'react'
import './CustomSelect.css'

const CustomSelect = ({handleCategorySelected,categories}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState('Todos');

    const handleOptionClick = (category) => {
        setSelectedOption(category.title)
        setIsOpen(false)
        handleCategorySelected(category.id)

      }

  return (
    <div className="selectWrapper" onClick={() => setIsOpen(!isOpen)}>
    <div className="selectedOption">
      {selectedOption}
      <span className="icon">&#9660;</span> {/* Símbolo de ángulo hacia abajo */}
    </div>
    {isOpen && (
      <ul className="optionsList">
        {categories.map((category) => (
          <li
            key={category.id}
            className="option"
            onClick={() => handleOptionClick(category)}
          >
            {category.title}
          </li>
        ))}
      </ul>
    )}
  </div>
  )
}

export default CustomSelect