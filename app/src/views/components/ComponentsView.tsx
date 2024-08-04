import { Search as SearchIcon } from 'react-feather'
import { Button, Checkbox, CheckboxGroup, RadioGroup, Switch, Input, Container, Spacer, Label, Title, Select, Row, Col, Box, TextArea, Progress, Spinner, ElementGroup } from '../../../../src'
import { Preview, Section } from '../../components'

export const ComponentsView = () => {
  return (
    <Container s={{ maxWidth: '800px', paddingY: 'xxl' }}>
      <Spacer>
        <Section title="Grid">
          <Preview title="Grid (auto)">
            <Row>
              <Col>
                <Box preview>Auto</Box>
              </Col>
              <Col>
                <Box preview>Auto</Box>
              </Col>
              <Col>
                <Box preview>Auto</Box>
              </Col>
              <Col>
                <Box preview>Auto</Box>
              </Col>
            </Row>
          </Preview>

          <Preview title="Grid (with widths)">
            <Row>
              <Col width={20}>
                <Box preview>20%</Box>
              </Col>
              <Col width={40}>
                <Box preview>40%</Box>
              </Col>
              <Col width={40}>
                <Box preview>40%</Box>
              </Col>
              <Col width={60}>
                <Box preview>60%</Box>
              </Col>
              <Col width={20}>
                <Box preview>20%</Box>
              </Col>
              <Col width={20}>
                <Box preview>20%</Box>
              </Col>
            </Row>
          </Preview>

          <Preview title="Grid (with responsive widths)">
            <Row>
              <Col width={[100, 50, 25]}>
                <Box preview>Responsive</Box>
              </Col>
              <Col width={[100, 50, 25]}>
                <Box preview>Responsive</Box>
              </Col>
              <Col width={[100, 50, 25]}>
                <Box preview>Responsive</Box>
              </Col>
              <Col width={[100, 50, 25]}>
                <Box preview>Responsive</Box>
              </Col>
            </Row>
          </Preview>
        </Section>

        <Section title="Title">
          <Preview>
            <Title as='h1'>Title 1</Title>
            <Title as='h2'>Title 2</Title>
            <Title as='h3'>Title 3</Title>
            <Title as='h4'>Title 4</Title>
            <Title as='h5'>Title 5</Title>
            <Title as='h6'>Title 6</Title>
          </Preview>
        </Section>

        <Section title="Button">
          <Preview>
            <Button>Button</Button>
            <Button secondary>Secondary Button</Button>
            <Button rounded>Rounded Button</Button>
            <Button outline>Outline Button</Button>
            <Button disabled>Disabled Button</Button>
            <Button block>Block Button</Button>
          </Preview>
        </Section>

        <Section title="Label">
          <Preview>
            <Label>Label</Label>
            <Label secondary>Secondary Label</Label>
            <Label outline>Outline Label</Label>
          </Preview>
        </Section>

        <Section title="Input">
          <Preview>
            <Input />
            <Input placeholder="Type something..." />
            <Input type="password" positive value="Passw0rdstr0ng" />
            <Input type="password" negative value="passwordnotstrong" />
          </Preview>
        </Section>

        <Section title="TextArea">
          <Preview>
            <TextArea placeholder="Type something..." />
          </Preview>
        </Section>

        <Section title="Checkbox">
          <Preview>
            <Checkbox />
            <Checkbox checked />
            <Checkbox checked disabled />
            <Checkbox label="Checkbox with label" />
          </Preview>
        </Section>

        <Section title="CheckboxGroup">
          <Preview>
            <CheckboxGroup
              options={[
                { label: 'Option 1', value: 1 },
                { label: 'Option 2', value: 2 },
                { label: 'Option 3', value: 3, checked: true },
                { label: 'Option 4', value: 4 }
              ]}
            />
          </Preview>
        </Section>

        <Section title="RadioGroup">
          <Preview>
            <RadioGroup
              options={[
                { label: 'Option 1', value: 1 },
                { label: 'Option 2', value: 2 }
              ]}
            />
          </Preview>
        </Section>

        <Section title="Switch">
          <Preview>
            <Switch />
          </Preview>
        </Section>

        <Section title="Select">
          <Preview>
            <Select
              options={[
                { label: 'Option 1', value: 1 },
                { label: 'Option 2', value: 2 },
                { label: 'Option 3', value: 3 },
                { label: 'Option 4', value: 4 }
              ]}
            />

            <Select
              options={[
                { label: 'Option 1', value: 'option-1' },
                { label: 'Option 2', value: 'option-2' },
                { label: 'Option 3', value: 'option-3' },
                { label: 'Option 4', value: 'option-4' }
              ]}
            />

            <Select
              multi
              options={[
                { label: 'Option 1', value: 1 },
                { label: 'Option 2', value: 2 },
                { label: 'Option 3', value: 3 },
                { label: 'Option 4', value: 4 }
              ]}
            />
          </Preview>
        </Section>

        <Section title="Progress">
          <Preview>
            <Progress amount={80} />
          </Preview>
        </Section>

        <Section title="Spinner">
          <Preview>
            <Spinner />
          </Preview>
        </Section>

        <Section title="ElementGroup">
          <Preview>
            <ElementGroup>
              <Button s={{ py: 'xxs' }} block>Tab 1</Button>
              <Button s={{ py: 'xxs' }} block outline>Tab 2</Button>
              <Button s={{ py: 'xxs' }} block outline>Tab 3</Button>
            </ElementGroup>
            <ElementGroup>
              <Input placeholder="Search..." />
              <Button s={{ py: 0, px: 's' }}>
                <SearchIcon size="1.2rem" />
              </Button>
            </ElementGroup>
          </Preview>
        </Section>
      </Spacer>
    </Container>
  )
}
