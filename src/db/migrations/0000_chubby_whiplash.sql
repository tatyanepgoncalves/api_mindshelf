CREATE TABLE "books" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"author" text NOT NULL,
	"year" date,
	"sinopse" text,
	"genres" jsonb NOT NULL,
	"comments" jsonb DEFAULT '[]'::jsonb,
	"available" boolean DEFAULT true,
	"achievements" jsonb DEFAULT '[]'::jsonb
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"books_read" jsonb DEFAULT '[]'::jsonb,
	"favorite_books" jsonb DEFAULT '[]'::jsonb,
	"most_read_genres" jsonb DEFAULT '[]'::jsonb
);
