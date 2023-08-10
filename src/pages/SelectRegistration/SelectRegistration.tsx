import React from "react";
import { modelCards } from "../../assets/modelCards";
import CardSelector from "../../components/Cards/CardSelector";


const SelectRegistration = () => {
  return (
    <>
      {modelCards.map(res => {
        return (
          <CardSelector
            img={res.img}
            label={res.label}
            subtitle={res.subtitle}
            onClick={() => res.onClick()}
          />
        )
      })}
    </>
  )
}
export default SelectRegistration;