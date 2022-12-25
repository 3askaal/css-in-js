import React, { useState } from 'react';
import {
  List,
  Button,
  Card,
  Checkbox,
  CheckboxGroup,
  RadioGroup,
  Switch,
  Link,
  Input,
  ListItem,
  Container,
  Spacer,
  Label,
  Title,
  Select,
  Row,
  Col,
  Box,
  Text,
  Popup,
  Body,
  TextArea,
  Progress,
  ElementGroup,
} from '@core';
import { Preview, Section } from '../../components';

export const ComponentsView = () => {
  const [modalOpened, setModalOpened] = useState<any>({});
  const toggleModalOpened = (instance: number) => setModalOpened({...modalOpened, [instance]: !modalOpened[instance]});

  return (
    <Container s={{ paddingY: 'xxl' }} data-testid="components-view">
      <Spacer>
        <Section title="Grid">
          <Preview title="Grid (auto)">
            <Row>
              <Col>
                <Box isPreview>Col Auto</Box>
              </Col>
              <Col>
                <Box isPreview>Col Auto</Box>
              </Col>
              <Col>
                <Box isPreview>Col Auto</Box>
              </Col>
              <Col>
                <Box isPreview>Col Auto</Box>
              </Col>
            </Row>
          </Preview>

          <Preview title="Grid (with widths)">
            <Row>
              <Col width={20}>
                <Box isPreview>Col 20%</Box>
              </Col>
              <Col width={40}>
                <Box isPreview>Col 40%</Box>
              </Col>
              <Col width={40}>
                <Box isPreview>Col 40%</Box>
              </Col>
            </Row>
          </Preview>
        </Section>

        <Section title="Title">
          <Preview>
            <Title level={1}>Title 1</Title>
            <Title level={2}>Title 2</Title>
            <Title level={3}>Title 3</Title>
            <Title level={4}>Title 4</Title>
            <Title level={5}>Title 5</Title>
            <Title level={6}>Title 6</Title>
          </Preview>
        </Section>

        <Section title="Text">
          <Preview title="Regular">
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              voluptatem, debitis incidunt nesciunt non fuga perferendis
              exercitationem esse fugiat magnam culpa, nemo dolores voluptates
              error, corporis numquam! Vel, assumenda similique.
            </Text>
          </Preview>
          <Preview title="Small">
            <Text type="small">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque natus quas tenetur aliquid ullam corrupti cupiditate
              vitae. Nemo eaque voluptatibus officiis dolor incidunt! Dolore ab
              molestiae dolores nam! Doloribus, eum?
            </Text>
          </Preview>
        </Section>

        <Section title="Body">
          <Preview>
            <Body>
              <p>
                Lorem, ipsum dolor <a href="/example">sit amet consectetur</a>{' '}
                adipisicing elit. Sed tenetur rerum nemo quo eligendi quae amet
                quidem facere eos, saepe doloribus. Aperiam, deserunt?
                Distinctio quam vel animi nesciunt atque corporis?
              </p>
              <p>
                <a href="/example">Repellat pariatur hic quod</a>
              </p>
              <ul>
                <li>Itaque dignissimos non magnam</li>
                <li>Vitae excepturi ad iste</li>
                <li>Corporis perspiciatis obcaecati</li>
              </ul>
              <Button>Sapiente officiis</Button>
            </Body>
          </Preview>
        </Section>

        <Section title="Button">
          <Preview>
            <Button>Button</Button>
            <Button isSecondary>Secondary Button</Button>
            <Button isOutline>Outline Button</Button>
            <Button isDisabled>Disabled Button</Button>
            <Button isBlock>Block Button</Button>
          </Preview>
        </Section>

        <Section title="Label">
          <Preview>
            <Label>Label</Label>
            <Label isSecondary>Secondary Label</Label>
            <Label isOutline>Outline Label</Label>
          </Preview>
        </Section>

        <Section title="Card">
          <Preview>
            <Card>Card without header</Card>
            <Card header="Card Header">Card with header</Card>
          </Preview>
        </Section>

        <Section title="Input">
          <Preview>
            <Input />
            <Input isPositive value="For when value is correct" />
            <Input isNegative value="For when value is incorrect" />
          </Preview>
        </Section>

        <Section title="TextArea">
          <Preview>
            <TextArea />
          </Preview>
        </Section>

        <Section title="Checkbox">
          <Preview>
            <Checkbox />
            <Checkbox isChecked />
            <Checkbox isChecked isDisabled />
            <Checkbox label="Checkbox with label" />
            <Checkbox isChecked label="Checked Checkbox with label" />
            <Checkbox
              isChecked
              isDisabled
              label="Checked disabled Checkbox with label"
            />
          </Preview>
        </Section>

        <Section title="CheckboxGroup">
          <Preview>
            <CheckboxGroup
              options={[
                { label: 'Option 1', value: 1 },
                { label: 'Option 2', value: 2 },
                { label: 'Option 3', value: 3, isChecked: true },
                { label: 'Option 4', value: 4 },
              ]}
            />
          </Preview>
        </Section>

        <Section title="RadioGroup">
          <Preview>
            <RadioGroup
              options={[
                { label: 'Option 1', value: 1 },
                { label: 'Option 2', value: 2 },
              ]}
            />
          </Preview>
        </Section>

        <Section title="Switch">
          <Preview>
            <Switch />
          </Preview>
        </Section>

        <Section title="SelectField">
          <Preview>
            <Select
              options={[
                { label: 'Option 1', value: 1 },
                { label: 'Option 2', value: 2 },
                { label: 'Option 3', value: 3 },
                { label: 'Option 4', value: 4 },
              ]}
            />

            <Select
              options={[
                { label: 'Option 1', value: 'option-1' },
                { label: 'Option 2', value: 'option-2' },
                { label: 'Option 3', value: 'option-3' },
                { label: 'Option 4', value: 'option-4' },
              ]}
            />

            <Select
              multi
              options={[
                { label: 'Option 1', value: 1 },
                { label: 'Option 2', value: 2 },
                { label: 'Option 3', value: 3 },
                { label: 'Option 4', value: 4 },
              ]}
            />
          </Preview>
        </Section>

        <Section title="Progress">
          <Preview>
            <Progress amount={40} />
          </Preview>
        </Section>

        <Section title="Link">
          <Preview>
            <Link to="/location">Link</Link>
          </Preview>
        </Section>

        <Section title="List">
          <Preview>
            <List>
              <ListItem>List Item 1</ListItem>
              <ListItem>List Item 2</ListItem>
              <ListItem>List Item 3</ListItem>
            </List>
          </Preview>
        </Section>

        <Section title="ElementGroup">
          <Preview>
            <ElementGroup>
              <Label>Label 1</Label>
              <Label isSecondary>Label 2</Label>
              <Label isOutline>Label 3</Label>
            </ElementGroup>
            <ElementGroup>
              <Button>Button 1</Button>
              <Button isSecondary>Button 2</Button>
              <Button isOutline>Button 3</Button>
            </ElementGroup>
            <ElementGroup>
              <Label isOutline>Label</Label>
              <Input placeholder="Input" />
              <Button>Button</Button>
            </ElementGroup>
            <ElementGroup
              s={{
                '> *': { borderRadius: 'l' },
              }}
            >
              <Label isOutline sRef="elementGroupLabel">
                Label
              </Label>
              <Input placeholder="Input" />
              <Button>Button</Button>
            </ElementGroup>
          </Preview>

          <Preview title="Popup">
            <div>
              <Button onClick={() => toggleModalOpened(1)}>Open Modal</Button>
              {modalOpened[1] ? (
                <Popup onClose={() => toggleModalOpened(1)}>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptate temporibus ut placeat error similique doloremque, facilis velit culpa sed facere reprehenderit in minus harum esse fugit eius quaerat ab?</p>
                </Popup>
              ) : null}
            </div>
          </Preview>

          <Preview title="Popup (with header)">
            <div>
              <Button onClick={() => toggleModalOpened(2)}>Open Modal</Button>
              {modalOpened[2] ? (
                <Popup header="Modal" onClose={() => toggleModalOpened(2)}>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptate temporibus ut placeat error similique doloremque, facilis velit culpa sed facere reprehenderit in minus harum esse fugit eius quaerat ab?</p>
                </Popup>
              ) : null}
            </div>
          </Preview>

          <Preview title="Popup (with header and footer)">
            <div>
              <Button onClick={() => toggleModalOpened(3)}>Open Modal</Button>
              {modalOpened[3] ? (
                <Popup header="Modal" actions={[
                  <Button isBlock>Cancel</Button>,
                  <Button isBlock isPositive>Confirm</Button>
                ]} onClose={() => toggleModalOpened(3)}>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptate temporibus ut placeat error similique doloremque, facilis velit culpa sed facere reprehenderit in minus harum esse fugit eius quaerat ab?</p>
                </Popup>
              ) : null}
            </div>
          </Preview>
        </Section>
      </Spacer>
    </Container>
  );
};
