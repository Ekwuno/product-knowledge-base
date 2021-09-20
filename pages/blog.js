import { GraphQLClient, gql } from "graphql-request";

export const getStaticProps = async () => {
  const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.Space_ID}`;

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.CDA_Token}`,
    },
  });

  const Productquery = gql`
    {
      landingPageCollection {
        items {
          header
          subHeader
        }
      }
    }
  `;

  const product = await graphQLClient.request(Productquery);
  console.log(product);
  return {
    props: { product },
  };
};

export default function Blog({ product }) {
  return (
    <div class="font-sans text-gray-900 h-full">
        
      <header class="absolute top-0 left-0 w-full py-4">
        <div class="flex items-center justify-between px-8">
          <span class="text-2xl tracking-tighter font-semibold">AppLogo</span>
          <div class="">
            <div class="flex items-center">
              <a
                class="text-lg leading-normal text-blue-500 hover:text-blue-600 no-underline ml-8"
                href="#"
              >
                Link
              </a>
              <a
                class="text-lg leading-normal text-blue-500 hover:text-blue-600 no-underline ml-8"
                href="#"
              >
                Link
              </a>
              <a
                class="text-lg leading-normal text-blue-500 hover:text-blue-600 no-underline ml-8"
                href="#"
              >
                Link
              </a>
            </div>
          </div>
        </div>
      </header>

      <section class="bg-blue-100 h-full py-8">
        <div class="w-5/6 max-w-lg ml-auto mr-auto h-full">
          <div class="flex items-center justify-center text-center h-full">
            <div>
              <h1 class="text-4xl sm:text-5xl font-semibold leading-none tracking-tighter mb-4">
                {product.landingPageCollection.items[0].header}
              </h1>
              <h2 class="text-2xl sm:text-3xl text-blue-800 opacity-75 font-normal leading-tight mb-8">
                {product.landingPageCollection.items[0].subHeader}
              </h2>
              <div class="flex flex-col sm:flex-row items-center justify-center sm:pt-3 mb-3 sm:mb-6">
                <a
                  class="flex items-center text-xl leading-none text-blue-500 hover:text-blue-600 no-underline mb-2 sm:mb-0 sm:mr-4"
                  href="#"
                >
                  <div class="mr-3">
                    <svg
                      class="align-middle"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="5" r="3" />
                      <line x1="12" y1="22" x2="12" y2="8" />
                      <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
                    </svg>
                  </div>
                  <span>Link to something</span>
                </a>
                <a
                  class="flex items-center text-xl leading-none text-blue-500 hover:text-blue-600 no-underline mt-2 sm:mt-0 sm:ml-4"
                  href="#"
                >
                  <div class="mr-3">
                    <svg
                      class="align-middle"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="8 12 12 16 16 12" />
                      <line x1="12" y1="8" x2="12" y2="16" />
                    </svg>
                  </div>
                  <span>Link to something</span>
                </a>
              </div>
              <div class="flex flex-col sm:flex-row justify-center pt-8">
                <button class="bg-blue-500 hover:bg-blue-600 text-2xl leading-none text-white font-semibold h-12 px-8 rounded-full whitespace-no-wrap mb-2 sm:mb-0 sm:mr-2">
                  Get started
                </button>
                <button class="bg-transparent text-2xl leading-none text-blue-500 font-semibold hover:text-blue-600 h-12 px-8 border border-blue-200 hover:border-blue-400 rounded-full whitespace-no-wrap mt-2 sm:mt-0 sm:ml-2">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {product.landingPageCollection.items[0].header}
    </div>
  );
}
