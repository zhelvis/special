/** @jsx jsx */
import { jsx, Themed, Button } from "theme-ui";
import ThemeButton from "../components/themeButton";

// markup
const IndexPage = () => {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <header
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "fixed",
          p: 4,
          width: "100%",
          backgroundColor: "background",
          borderBottom: "1px solid",
          borderColor: "muted",
        }}
      >
        <div>
          <Button mr={2}>Primary</Button>
          <Button variant="secondary">Secondary</Button>
        </div>
        <ThemeButton />
      </header>
      <main
        sx={{
          display: "block",
          p: 4,
          width: "100%",
          flex: "1 1 auto",
          mt: 6,
        }}
      >
        <Themed.h1>Header 1</Themed.h1>
        <Themed.h2>Header 2</Themed.h2>
        <Themed.h3>Header 3</Themed.h3>
        <Themed.h4>Header 4</Themed.h4>
        <Themed.h5>Header 5</Themed.h5>
        <Themed.h6>Header 6</Themed.h6>
        <Themed.p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Themed.p>
        <Themed.h1>Заголовок 1</Themed.h1>
        <Themed.h2>Заголовок 2</Themed.h2>
        <Themed.h3>Заголовок 3</Themed.h3>
        <Themed.h4>Заголовок 4</Themed.h4>
        <Themed.h5>Заголовок 5</Themed.h5>
        <Themed.h6>Заголовок 6</Themed.h6>
        <Themed.p>
          Разнообразный и богатый опыт реализация намеченных плановых заданий
          способствует подготовки и реализации существенных финансовых и
          административных условий. С другой стороны новая модель
          организационной деятельности способствует подготовки и реализации
          существенных финансовых и административных условий. Товарищи!
          консультация с широким активом обеспечивает широкому кругу
          (специалистов) участие в формировании направлений прогрессивного
          развития. Таким образом дальнейшее развитие различных форм
          деятельности в значительной степени обуславливает создание дальнейших
          направлений развития. Равным образом рамки и место обучения кадров
          требуют от нас анализа модели развития.
        </Themed.p>
      </main>
      <footer
        sx={{
          width: "100%",
          p: 4,
        }}
      >
        <span sx={{ variant: "text.caption" }}>Capture</span>
      </footer>
    </div>
  );
};

export default IndexPage;
