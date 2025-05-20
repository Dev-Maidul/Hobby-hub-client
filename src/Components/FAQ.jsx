import React from "react";

const FAQ = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 rounded-2xl py-8 mb-8">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold sm:text-4xl text-center py-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
              How do I join a group on HobbyHub?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
             To join a group on HobbyHub, simply visit the "All Groups" page where you'll find a list of available hobby groups. Click on the "See More" button for a group you're interested in. On the group details page, if the group is still accepting members, you'll see a "Join Group" button. Click it, and you'll become a part of the group. If the group’s start date has already passed, a message will appear indicating that the group is no longer active. You can then explore other groups or create a new one! Make sure you're logged in to join or create a group. Enjoy meeting like-minded people!.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
              How can I create my own hobby group?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
              To create your own hobby group, navigate to the "Create Group" page. Here, you'll fill in the group details, including the group name, hobby category (like painting, photography, etc.), a description, and other important information such as meeting location, max members, and start date. After filling out the form, click "Create" to submit your group. Once approved, your group will be live on HobbyHub, allowing others to join. You can manage your group from the "My Groups" page. Creating a group is a great way to connect with people who share your passion!

.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
              What if I forget my password or face login issues?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
               If you're having trouble logging in, make sure you're entering the correct email and password. If you’ve forgotten your password, you can use the reset feature to get back into your account. However, at the moment, HobbyHub doesn’t support password recovery or email verification for the assignment's requirements. If you’re still having trouble, you can contact support for assistance. We recommend setting a strong, memorable password with a mix of letters and numbers to ensure easy access. For any other login-related issues, please feel free to reach out to our helpdesk team.{" "}
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
