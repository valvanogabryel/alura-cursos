import Head from "next/head";
import { Footer } from "../../components/commons/Footer";
import { Menu } from "../../components/commons/Menu";
import { Box, Text, theme } from "../../theme/components";
import { cmsService } from "../../infra/cms/cmsService";
import { renderNodeRule, StructuredText } from "react-datocms";
import { isHeading } from "datocms-structured-text-utils";
import { pageHOC } from "../../components/wrappers/pageHOC";

export async function getStaticPaths() {
  const pathsQuery = `
  query($first: IntType, $skip: IntType) {
    allContentFaqQuestions(first: $first, skip: $skip) {
     id
     title
   }
}
  `;

  const { data } = await cmsService({
    query: pathsQuery,
    globalContent: false,
    variables: {
      first: 100,
      skip: 0,
    },
  });

  const paths = data.allContentFaqQuestions.map(({ id }) => {
    return {
      params: { id },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, preview }) {
  const { id } = params;

  const contentQuery = `
  query ($id: ItemId) {
    contentFaqQuestion (filter: {
      id: {
        eq: $id
      }
    } ) {
      title
      content {
        value
      }
    } 
  }
  `;

  const { data } = await cmsService({
    query: contentQuery,
    variables: {
      id,
    },
    preview: preview,
  });

  return {
    props: {
      cmsContent: data,
      id,
      title: data.contentFaqQuestion.title,
      content: data.contentFaqQuestion.content.value,
    },
  };
}

function FAQQuestionScreen({ cmsContent }) {
  const { title, content } = cmsContent.contentFaqQuestion;
  return (
    <>
      <Head>
        <title>FAQ - Alura</title>
      </Head>

      <Menu />

      <Box
        tag="main"
        styleSheet={{
          flex: 1,
          backgroundColor: theme.colors.neutral.x050,
          paddingTop: theme.space.x20,
          paddingHorizontal: theme.space.x4,
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            gap: theme.space.x4,
            flexDirection: "column",
            width: "100%",
            maxWidth: theme.space.xcontainer_lg,
            marginHorizontal: "auto",
          }}
        >
          <Text tag="h1" variant="heading1">
            {title}
          </Text>

          <StructuredText
            data={content}
            customNodeRules={[
              renderNodeRule(isHeading, ({ node, children, key }) => {
                const tag = `h${node.level}`;
                const variant = `heading${node.level}`;

                return (
                  <Text key={key} tag={tag} variant={variant}>
                    {children}
                  </Text>
                );
              }),
            ]}
          />
        </Box>
      </Box>

      <Footer />
    </>
  );
}

export default pageHOC(FAQQuestionScreen);
