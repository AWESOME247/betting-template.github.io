<template>
    <div class="container mx-auto p-4 max-w-screen-lg md:mx-3 lg:mx-auto text-xl font-mukha text-gray-600">
        <h1 class="text-4xl my-6">Privacy Policy for Omoyetips</h1>
        <p>
            At Omoyetips, we are committed to protecting your privacy and ensuring that your personal information is safe
            and
            secure. This Privacy Policy outlines how we collect, use, and share your personal information, and your rights
            in
            relation to your personal information under the General Data Protection Regulation (GDPR), the California
            Consumer
            Privacy Act (CCPA), and the California Privacy Rights Act (CPRA).
        </p>
        <ul class="list-decimal list-inside p-3">
            <li>
                Information we collect
                <div class="container mx-7">
                    <h2 class="my-4">
                        We may collect the following types of personal information:
                    </h2>
                    <ul class="list-inside list-disc">
                        <li>Contact information, such as your name, email address, and phone number.</li>
                        <li>Demographic information, such as your age, gender, and location.</li>
                        <li>Payment information, such as your credit card details.</li>
                        <li>Usage information, such as your browsing history, search queries, and preferences.</li>
                        <li>Communication information, such as your correspondence with us.</li>
                    </ul>
                </div>
            </li>

            <li class="my-3">
                How we use your information
                <div class="container mx-7">
                    <h2 class="my-4">
                        We use your personal information for the following purposes:
                    </h2>
                    <ul class="list-inside list-disc">
                        <li>To provide and improve our services to you.</li>
                        <li>To personalize your experience on our website.</li>
                        <li>To communicate with you about our services.</li>
                        <li>To process payments and transactions.</li>
                        <li>To comply with legal obligations.</li>
                    </ul>
                </div>
            </li>

            <li class="my-3">
                How we share your information
                <div class="conatainer mx-7">
                    <h2 class="my-4">
                        We may share your personal information with the following third parties:
                    </h2>
                    <ul class="list-inside list-disc">
                        <li>Service providers who help us provide our services, such as payment processors and email
                            marketing
                            providers.</li>
                        <li>Affiliates and subsidiaries for business purposes.</li>
                        <li>Law enforcement agencies or other third parties as required by law.</li>
                        <li>To process payments and transactions.</li>
                        <li>To comply with legal obligations.</li>
                    </ul>
                </div>
            </li>

            <li class="my-3">
                Your rights
                <div class="container mx-7">
                    <h2 class="my-4">
                        Under the GDPR, CCPA, and CPRA, you have the following rights in relation to your personal
                        information:
                    </h2>
                    <ul class="list-inside list-disc">
                        <li>Right to access: You have the right to access the personal information we hold about you.</li>
                        <li>Right to rectification: You have the right to request that we correct any inaccuracies in your
                            personal
                            information.</li>
                        <li>Right to erasure: You have the right to request that we erase your personal information.</li>
                        <li>Right to restrict processing: You have the right to request that we restrict the processing of
                            your
                            personal information.</li>
                        <li>Right to data portability: You have the right to receive your personal information in a
                            structured,
                            commonly used, and machine-readable format.</li>
                        <li>Right to object: You have the right to object to the processing of your personal information.
                        </li>
                    </ul>
                </div>
            </li>

            <li>
                Cookies
                <h2 class="my-4">
                    We use cookies and similar tracking technologies to improve our website and personalize your experience.
                    You
                    can manage your cookie preferences by adjusting your browser settings.
                </h2>
            </li>

            <li>
                Contact us
                <h2 class="my-4">
                    If you have any questions or concerns about our Privacy Policy or the way we collect, use, or share your
                    personal information, please contact us at Email: admin@omoyetips.com.
                </h2>
            </li>

            <li>
                Changes to our Privacy Policy
                <h2 class="my-4">
                    We may update this Privacy Policy from time to time. Any changes will be posted on our website and will
                    be
                    effective immediately upon posting.
                </h2>
            </li>
            <h2>Last updated: 24/03/2023</h2>
        </ul>
    </div>
</template>
<script lang="ts">
import { useHead } from "@unhead/vue";
import { useRoute } from "vue-router";
export default {
    name: "Privacy",
    setup() {
        useHead({
            title: 'Privacy and Policy - Finance Omoyetips',
            meta: [
                {
                    name: 'description',
                    content: 'Read our privacy and policy - Finance Omoyetips'
                },
            ],
            link: [{
                rel: "canonical", href: 'https://betting.omoyetips.com' + useRoute().path.replace(/\/$/, "")
            }]
        })
    }
}
</script>