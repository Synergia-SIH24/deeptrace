
![logo](/frontend/static/logo.webp)

## Introduction

Deep fake technology, which involves synthetically generated audio and video content, has rapidly gained popularity, especially within tech-savvy communities. However, the same technology poses significant challenges due to its potential to disrupt politics, spread disinformation, commit fraud, and create non-consensual content. Deep fakes have also been weaponized to tarnish individual reputations. The growing sophistication of AI/ML and large language models for generative AI has made detecting and identifying deep fakes increasingly difficult, posing a major challenge for security agencies worldwide.

In response, extensive research has begun to explore multiple facets of deep fake identification and authentication. This project aims to tackle one such challenge—authenticating face-swap deep fake videos, where one person’s facial identity is replaced with another’s. Leveraging advanced AI/ML techniques such as Convolutional Neural Networks (CNNs), Recurrent Neural Networks (RNNs), Long Short-Term Memory (LSTM) networks, adversarial training, and more, this project explores multiple approaches to enhance the accuracy and robustness of deep fake detection.

The solution will process a video suspected of being a deep fake and provide a detailed report identifying anomalies, revealing the methods used for its creation, and confirming whether the video is authentic or fake. Datasets such as the World Leader's Dataset (WLDR), FaceForensics++, DeepFake Detection Dataset (DFD), and others will be used to train and test the models

## Features

1. **Deep Fake Detection**: Utilizes advanced AI/ML techniques to detect face-swap deep fake videos where one person's face is replaced with another's.
   
2. **Multiple Detection Approaches**:
   - **Convolutional Neural Networks (CNNs)**: Detects inconsistencies in facial features, expressions, and video frame transitions using ResNet.
   - **Recurrent Neural Networks (RNNs) and Long Short-Term Memory (LSTM) Networks**: Analyzes temporal sequences to find anomalies in video frame continuity.
   - **Capsule Networks**: Identifies discrepancies in facial pose, texture, and orientation.
   - **Adversarial Training**: Leverages GANs to generate and simultaneously detect deep fakes, improving detection accuracy.
   - **Audio-Visual Inconsistencies**: Detects mismatches between lip movements and audio tracks.

3. **Hybrid Detection Model**: Combines spatial, temporal, audio, and frequency analysis for a comprehensive detection mechanism.

4. **Biometric Verification**: Analyzes subtle behavioral traits such as micro-expressions and eye movements to identify deep fake content.

5. **Frequency Domain Analysis**: Examines video anomalies and artifacts at the frequency level to detect tampering.

6. **Dataset Compatibility**: Supports industry-leading datasets for training and validation, including:
   - World Leader’s Dataset (WLDR)
   - FaceForensics++ (FF)
   - DeepFake Detection Dataset (DFD)

7. **Scalable and Robust**: Designed to handle large  video files and scalable for different detection requirements and settings.

## How It Works

This deep fake detection project leverages a combination of advanced AI/ML techniques and forensic analysis to authenticate face-swap deep fake videos. The system works through the following process:

1. **Input Video Processing**
   - The user provides a video suspected of being a deep fake.
   - The video is split into individual frames and analyzed both spatially (each frame) and temporally (across frames).

2. **Feature Extraction**
   - **Facial Feature Detection**: Using Convolutional Neural Networks (CNNs), facial landmarks and other key features (e.g., eyes, mouth, nose) are extracted for each frame to identify irregularities in expression or alignment.
   - **Audio-Visual Sync Check**: The system analyzes the synchronization between lip movements and the audio track to detect mismatches, which are common in deep fakes.
   - **Temporal Anomalies**: Long Short-Term Memory (LSTM) networks are employed to analyze the flow of video frames, checking for inconsistencies in motion or facial continuity.
   - **Pose and Texture Analysis**: Capsule networks are used to identify irregularities in facial pose and texture that might result from deep fake generation.

3. **Biometric and Behavioral Analysis**
   - The system conducts biometric verification by examining subtle behaviors, such as micro-expressions and eye or head movement patterns, to detect any discrepancies that indicate manipulation.

4. **Deep Fake Detection Report**
   - After analysis, the system generates a detailed report that includes:
     - A confirmation of whether the video is fake or authentic.
     - Specific abnormalities detected, such as frame inconsistencies, facial mismatches, and temporal anomalies.
     - The likely underlying technique used to create the deep fake (e.g., GAN-based face swapping).

5. **Dataset Integration**
   - The system is trained and tested using multiple well-known datasets, such as World Leader’s Dataset (WLDR), FaceForensics++, DeepFake Detection Dataset (DFD), and others to ensure high accuracy and robustness in detecting different types of deep fakes.

By combining multiple detection techniques and using a diverse dataset, the system ensures reliable and accurate detection of deep fake videos.

## Flow Chart 

![image](https://github.com/user-attachments/assets/cc76ccf2-e670-4e22-8738-0333cfda14f5)

## Future Potential Enhancements for DeepTrace

1. **SaaS Offering**: DeepTrace is being developed with the potential to be offered as a SaaS (Software as a Service) platform, making it accessible and scalable for a wider range of users.

2. **Comprehensive Deep Fake Detection Report**: The system will be enhanced to generate detailed reports that include:
   - A confirmation of whether the analyzed video is fake or authentic.
   - Identification of specific abnormalities such as frame inconsistencies, facial mismatches, and temporal anomalies.
   - Insights into the technique used to create the deep fake (e.g., GAN-based face swapping).

These planned enhancements will improve the overall user experience and make DeepTrace more powerful in detecting and analyzing deep fakes.

## Build

```bash
# Clone this repository
git clone https://github.com/Synergia-SIH24/face-swap-deepfake-video-detection.git
# Change directory into the project
cd face-swap-deepfake-video-detection
# Install updated dependencies (respects semver)
pnpm update
# Compose the docker compose file (pun intended)
docker compose -p deeptrace -f docker-compose.yaml up -d
# Rename .env.example to .env
mv .env.example .env # Modify the DATABASE_URL according to your needs
# Run migrations
pnpm db:generate
pnpm db:push
# Run dev server
pnpm dev
```

## Contact Details

For any questions, feedback, or contributions related to the DeepTrace project, please reach out to the project team using the contact information below:

| Role          | Name                | Email                           |
|---------------|---------------------|---------------------------------|
| Project Lead  | Ayan Masood         | ayan.masood.adtu@gmail.com      |
| Team Member   | Kaustav Raj Kalita  | kaustav.adtu@gmail.com          |
| Team Member   | Debarchito Nath     | debarchito.nath.adtu@gmail.com  |
| Team Member   | Aayush Kumar Prasad | aayushprasad1007@gmail.com      |
| Team Member   | Sneha Sharma        | snehasnehasharma0918@gmail.com  |
| Team Member   | Pariza Hazarika     | mtzapariza@gmail.com            |
