import styled from 'styled-components';

export const FilterContainer = styled.div``;

export const FilterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;

  > :last-child {
    margin-top: 48px;
  }
`;
export const FormWrapper = styled.div``;

export const LocationLabel = styled.label`
  color: rgba(16, 24, 40, 0.6);
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;

  svg {
    position: absolute;
    top: 50px;
    left: 15px;
    stroke: rgba(16, 24, 40, 0.6);
  }
`;

export const Select = styled.select`
  display: flex;
  padding: 18px 0px 18px 44px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 360px;
  color: rgba(16, 24, 40, 0.6);
  line-height: 1.25;
  border: none;
  border-radius: 10px;
  background: var(--color-inputs);

  & option {
    color: var(--color-text);
    width: 360px;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25;
    width: 100%;
  }

  .selected option {
    color: var(--color-text);
  }
`;

export const Option = styled.option``;

export const FilterLabel = styled.label`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -24px;
    width: 360px;
    height: 1px;
    background-color: rgba(16, 24, 40, 0.1);
  }
`;

export const FilterTitle = styled.h2`
  color: var(--color-main);
  font-weight: 500;
  margin-bottom: 14px;
`;

export const CheckboxField = styled.fieldset`
  display: flex;
  flex-wrap: wrap;
  margin-top: 48px;
  gap: 10px;
  align-items: center;
  border: none;
  padding: 0;
`;

export const Checkbox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  text-align: center;
  min-width: calc((100% - 2 * 10px) / 3);
  padding-top: 17px;
  padding-bottom: 17px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: relative;
  cursor: pointer;
  font-weight: 500;
  line-height: 1.25;

  &:hover {
    border: 1px solid var(--color-button);
  }
`;

export const InputCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: all;
`;

export const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: all;
`;

export const TypeCheckbox = styled(Checkbox)`
  padding-top: 18.5px;
  padding-bottom: 18.5px;
`;

export const HiddenRadio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  color: var(--color-text);
  border: 1px solid rgba(16, 24, 40, 0.2);
  cursor: pointer;
  pointer-events: all;
`;
