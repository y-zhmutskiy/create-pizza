import React, { useState } from 'react';

export const PizzaConfigurator = (): JSX.Element => {
  const [size, setSize] = useState<string>('30cm');
  const [dough, setDough] = useState<string>('thin');
  const [sous, setSous] = useState<string>('tomato');

  const [cheese, setCheese] = useState<string[]>([]);
  const [vegetables, setVegetables] = useState<string[]>([]);
  const [meat, setMeat] = useState<string[]>([]);

  const onRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget;
    switch (name) {
      case 'size':
        setSize(value);
        break;
      case 'dough':
        setDough(value);
        break;
      case 'sous':
        setSous(value);
        break;
    }
  };

  const updateCheckboxValue = (prevValue: string[], value: string) => {
    if (prevValue.includes(value)) {
      return prevValue.filter((item) => item !== value);
    } else {
      return [...prevValue, value];
    }
  };

  const onCheckboxChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    switch (name) {
      case 'cheese':
        setCheese(updateCheckboxValue(cheese, value));
        break;
      case 'vegetables':
        setVegetables(updateCheckboxValue(vegetables, value));
        break;
      case 'meat':
        setMeat(updateCheckboxValue(meat, value));
        break;
    }
  };

  const sizePrice = size === '35cm' ? 50 : 0;
  const ingredientsPrice = (cheese.length + vegetables.length + meat.length) * 29;
  const price = 200 + sizePrice + ingredientsPrice;

  return (
    <form>
      <fieldset>
        <legend>Size</legend>
        <label>
          30 cm <input type='radio' value='30cm' checked={size === '30cm'} name='size' onChange={onRadioChange} />
        </label>
        <label>
          35 cm <input type='radio' value='35cm' checked={size === '35cm'} name='size' onChange={onRadioChange} />
        </label>
      </fieldset>

      <fieldset>
        <legend>Dough</legend>
        <label>
          Lush <input type='radio' value='lush' checked={dough === 'lush'} name='dough' onChange={onRadioChange} />
        </label>
        <label>
          Thin <input type='radio' value='thin' checked={dough === 'thin'} name='dough' onChange={onRadioChange} />
        </label>
      </fieldset>

      <fieldset>
        <legend>Sous</legend>
        <label>
          Tomato <input type='radio' value='tomato' checked={sous === 'tomato'} name='sous' onChange={onRadioChange} />
        </label>
        <label>
          White <input type='radio' value='white' checked={sous === 'white'} name='sous' onChange={onRadioChange} />
        </label>
        <label>
          Spicy <input type='radio' value='spicy' checked={sous === 'spicy'} name='sous' onChange={onRadioChange} />
        </label>
      </fieldset>

      <fieldset>
        <legend>Cheese</legend>
        <label>
          Mozzarella
          <input
            type='checkbox'
            value='mozzarella'
            checked={cheese.includes('mozzarella')}
            name='mozzarella'
            onChange={onCheckboxChange('cheese')}
          />
        </label>
        <label>
          Cheddar
          <input
            type='checkbox'
            value='cheddar'
            checked={cheese.includes('cheddar')}
            name='cheddar'
            onChange={onCheckboxChange('cheese')}
          />
        </label>
        <label>
          Dor blue
          <input
            type='checkbox'
            value='dor blue'
            checked={cheese.includes('dor blue')}
            name='dorBlue'
            onChange={onCheckboxChange('cheese')}
          />
        </label>
      </fieldset>

      <fieldset>
        <legend>Vegetables</legend>
        <label>
          Tomato
          <input
            type='checkbox'
            value='tomato'
            name='tomato'
            checked={vegetables.includes('tomato')}
            onChange={onCheckboxChange('vegetables')}
          />
        </label>
        <label>
          Mushroom
          <input
            type='checkbox'
            value='mushroom'
            checked={vegetables.includes('mushroom')}
            name='mushroom'
            onChange={onCheckboxChange('vegetables')}
          />
        </label>
        <label>
          Pepper
          <input
            type='checkbox'
            value='pepper'
            checked={vegetables.includes('pepper')}
            name='pepper'
            onChange={onCheckboxChange('vegetables')}
          />
        </label>
      </fieldset>

      <fieldset>
        <legend>Meat</legend>
        <label>
          Bacon
          <input
            type='checkbox'
            value='bacon'
            checked={meat.includes('bacon')}
            name='bacon'
            onChange={onCheckboxChange('meat')}
          />
        </label>
        <label>
          Pepperoni
          <input
            type='checkbox'
            value='pepperoni'
            checked={meat.includes('pepperoni')}
            name='pepperoni'
            onChange={onCheckboxChange('meat')}
          />
        </label>
        <label>
          Ham
          <input
            type='checkbox'
            value='ham'
            checked={meat.includes('ham')}
            name='ham'
            onChange={onCheckboxChange('meat')}
          />
        </label>
      </fieldset>

      <button>Order {price}$</button>
    </form>
  );
};
