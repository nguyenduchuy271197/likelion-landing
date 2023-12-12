import notion from "@/lib/notion";

export async function POST(request: Request) {
  const user = await request.json();

  const newRow = {
    parent: {
      database_id: process.env.NOTION_WEBINAR_REGISTRATION_DATABASE_ID!,
    },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: user.name,
            },
          },
        ],
      },
      Email: {
        email: user.email,
      },
      Phone: {
        rich_text: [
          {
            text: {
              content: user.phone,
            },
          },
        ],
      },
      "Trường / Công ty": {
        rich_text: [
          {
            text: {
              content: user.company,
            },
          },
        ],
      },
      "Câu hỏi cho diễn giả": {
        rich_text: [
          {
            text: {
              content: user.content,
            },
          },
        ],
      },
    },
  };

  try {
    const response = await notion.pages.create(newRow);

    return new Response("OK");
  } catch (error) {
    return new Response("Something Went Wrong", { status: 500 });
  }
}
