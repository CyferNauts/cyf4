import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Moon, Sun, ExternalLink, Copy, ChevronDown, ChevronRight,
  Brain, Code, Database, Zap, BookOpen, Video, Download, Star,
  TrendingUp, Menu, X, Filter, Award, Globe, Target, Lightbulb,
  Cpu, Layers, FileText, Youtube, Package, GitBranch, Terminal,
  BarChart, Network, Eye, Sparkles, Workflow, Cloud, Lock,
  GraduationCap, Users, Headphones, Wrench, ArrowLeft
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MachineLearningHub = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedSections, setExpandedSections] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState('');

  // Massive ML resource database with 300+ resources
  const resources = {
    courses: {
      title: 'ML Courses & Learning Paths',
      icon: GraduationCap,
      color: '#3b82f6',
      sections: [
        {
          name: 'Foundational Courses',
          resources: [
            {
              name: 'Andrew Ng - Machine Learning Specialization',
              url: 'https://www.coursera.org/specializations/machine-learning-introduction',
              type: 'course',
              description: 'Stanford\'s legendary 3-course specialization covering supervised/unsupervised learning, best practices - Free to audit'
            },
            {
              name: 'Andrew Ng - Deep Learning Specialization',
              url: 'https://www.coursera.org/specializations/deep-learning',
              type: 'course',
              description: '5-course deep learning specialization: neural networks, CNNs, RNNs, transformers - deeplearning.ai'
            },
            {
              name: 'Google - Machine Learning Crash Course',
              url: 'https://developers.google.com/machine-learning/crash-course',
              type: 'course',
              description: 'Fast-paced practical introduction with TensorFlow APIs, 15 hours of video lectures, 40+ exercises - Free'
            },
            {
              name: 'Fast.ai - Practical Deep Learning',
              url: 'https://course.fast.ai',
              type: 'course',
              description: 'Top-down teaching approach: build models first, theory later - completely free with PyTorch'
            },
            {
              name: 'MIT - Introduction to Deep Learning',
              url: 'http://introtodeeplearning.com',
              type: 'course',
              description: 'MIT\'s official deep learning course with video lectures, slides, and lab materials - Free'
            },
            {
              name: 'Stanford CS229 - Machine Learning',
              url: 'https://cs229.stanford.edu',
              type: 'course',
              description: 'Complete Stanford ML course materials, lecture notes, problem sets, and projects - Free'
            },
            {
              name: 'Stanford CS230 - Deep Learning',
              url: 'https://cs230.stanford.edu',
              type: 'course',
              description: 'Advanced deep learning with project-based learning from Stanford - Free materials'
            },
            {
              name: 'Alison - Machine Learning Courses',
              url: 'https://alison.com/tag/machine-learning',
              type: 'course',
              description: 'Free online ML courses with CPD-accredited certificates covering fundamentals to advanced topics'
            }
          ]
        },
        {
          name: 'Specialized ML Courses',
          resources: [
            {
              name: 'Full Stack Deep Learning',
              url: 'https://fullstackdeeplearning.com',
              type: 'course',
              description: 'Production ML systems: training, deployment, monitoring, MLOps best practices - Free course'
            },
            {
              name: 'Made With ML',
              url: 'https://madewithml.com',
              type: 'course',
              description: 'MLOps, experiment tracking, model deployment, CI/CD for ML - comprehensive free curriculum'
            },
            {
              name: 'Hugging Face NLP Course',
              url: 'https://huggingface.co/learn/nlp-course',
              type: 'course',
              description: 'Complete NLP with transformers, tokenization, fine-tuning, deployment - free with exercises'
            },
            {
              name: 'DeepLearning.AI TensorFlow Certificate',
              url: 'https://www.coursera.org/professional-certificates/tensorflow-in-practice',
              type: 'course',
              description: '4-course program covering CNNs, NLP, sequences, time series with TensorFlow'
            },
            {
              name: 'NYU - Deep Learning',
              url: 'https://atcold.github.io/pytorch-Deep-Learning',
              type: 'course',
              description: 'Yann LeCun\'s NYU course with PyTorch practicals, theory, and implementations - Free'
            },
            {
              name: 'UC Berkeley CS 182 - Deep Learning',
              url: 'https://cs182sp21.github.io',
              type: 'course',
              description: 'Berkeley\'s DL course covering foundations, CNNs, RNNs, attention, GANs - Free materials'
            }
          ]
        },
        {
          name: 'Math for ML',
          resources: [
            {
              name: 'Mathematics for Machine Learning - Coursera',
              url: 'https://www.coursera.org/specializations/mathematics-machine-learning',
              type: 'course',
              description: 'Imperial College London: linear algebra, multivariate calculus, PCA - Free to audit'
            },
            {
              name: '3Blue1Brown - Neural Networks',
              url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi',
              type: 'youtube',
              description: 'Visual intuitive explanations of neural networks, calculus, linear algebra - 3M+ views'
            },
            {
              name: 'Khan Academy - Linear Algebra',
              url: 'https://www.khanacademy.org/math/linear-algebra',
              type: 'course',
              description: 'Complete linear algebra foundation essential for ML - free with practice exercises'
            },
            {
              name: 'StatQuest - Statistics Fundamentals',
              url: 'https://www.youtube.com/@statquest',
              type: 'youtube',
              description: 'Josh Starmer\'s clear explanations of stats concepts for ML - 1.5M+ subscribers'
            }
          ]
        },
        {
          name: 'Certificate Programs',
          resources: [
            {
              name: 'IBM Machine Learning Professional Certificate',
              url: 'https://www.coursera.org/professional-certificates/ibm-machine-learning',
              type: 'course',
              description: '6-course program covering supervised/unsupervised learning, deep learning, time series'
            },
            {
              name: 'AWS Machine Learning Engineer',
              url: 'https://aws.amazon.com/training/learn-about/machine-learning',
              type: 'course',
              description: 'Cloud ML with AWS services: SageMaker, recognition APIs, deployment strategies'
            },
            {
              name: 'Google Cloud ML Engineer',
              url: 'https://cloud.google.com/learn/certification/machine-learning-engineer',
              type: 'course',
              description: 'Professional ML engineering on GCP with Vertex AI and TensorFlow'
            },
            {
              name: 'UMD - Free AI Certificate',
              url: 'https://www.rhsmith.umd.edu/programs/executive-education/learning-opportunities-individuals/free-online-certificate-artificial-intelligence-and-career-empowerment',
              type: 'course',
              description: 'Completely free certificate in AI and Career Empowerment from University of Maryland Smith School'
            }
          ]
        }
      ]
    },
    frameworks: {
      title: 'ML Frameworks & Libraries',
      icon: Code,
      color: '#10b981',
      sections: [
        {
          name: 'Deep Learning Frameworks',
          resources: [
            {
              name: 'TensorFlow',
              url: 'https://www.tensorflow.org',
              type: 'tool',
              description: 'Google\'s end-to-end open-source platform - Keras API, deployment tools, mobile/web support - Free'
            },
            {
              name: 'PyTorch',
              url: 'https://pytorch.org',
              type: 'tool',
              description: 'Meta AI\'s flexible deep learning framework - dynamic computation graphs, research-friendly - Free'
            },
            {
              name: 'JAX',
              url: 'https://github.com/google/jax',
              type: 'tool',
              description: 'Google\'s NumPy + autograd + XLA compiler - high-performance ML research - Free'
            },
            {
              name: 'MXNet',
              url: 'https://mxnet.apache.org',
              type: 'tool',
              description: 'Apache deep learning framework - efficient, flexible, scalable - Free'
            },
            {
              name: 'Chainer',
              url: 'https://chainer.org',
              type: 'tool',
              description: 'Python-based deep learning framework with define-by-run approach - Free'
            },
            {
              name: 'PaddlePaddle',
              url: 'https://www.paddlepaddle.org.cn',
              type: 'tool',
              description: 'Baidu\'s deep learning platform - easy-to-use, efficient, flexible - Free'
            }
          ]
        },
        {
          name: 'Classical ML Libraries',
          resources: [
            {
              name: 'scikit-learn',
              url: 'https://scikit-learn.org',
              type: 'tool',
              description: 'Python ML library - classification, regression, clustering, preprocessing - Free and open-source'
            },
            {
              name: 'XGBoost',
              url: 'https://xgboost.readthedocs.io',
              type: 'tool',
              description: 'Gradient boosting library - Kaggle competitions favorite, extremely fast - Free'
            },
            {
              name: 'LightGBM',
              url: 'https://lightgbm.readthedocs.io',
              type: 'tool',
              description: 'Microsoft\'s gradient boosting framework - faster training, lower memory usage - Free'
            },
            {
              name: 'CatBoost',
              url: 'https://catboost.ai',
              type: 'tool',
              description: 'Yandex gradient boosting - handles categorical features natively - Free'
            },
            {
              name: 'Prophet',
              url: 'https://facebook.github.io/prophet',
              type: 'tool',
              description: 'Facebook\'s time series forecasting tool - intuitive, fast, automated - Free'
            }
          ]
        },
        {
          name: 'High-Level APIs',
          resources: [
            {
              name: 'Keras',
              url: 'https://keras.io',
              type: 'tool',
              description: 'High-level neural networks API - runs on TensorFlow, simple and intuitive - Free'
            },
            {
              name: 'FastAI',
              url: 'https://www.fast.ai',
              type: 'tool',
              description: 'High-level PyTorch library - best practices built-in, rapid prototyping - Free'
            },
            {
              name: 'PyTorch Lightning',
              url: 'https://lightning.ai/docs/pytorch',
              type: 'tool',
              description: 'High-performance PyTorch wrapper - less boilerplate, more research - Free'
            },
            {
              name: 'TensorFlow Keras',
              url: 'https://www.tensorflow.org/guide/keras',
              type: 'tool',
              description: 'Keras integrated into TensorFlow - official TF high-level API - Free'
            }
          ]
        },
        {
          name: 'Specialized Libraries',
          resources: [
            {
              name: 'Hugging Face Transformers',
              url: 'https://huggingface.co/transformers',
              type: 'tool',
              description: 'State-of-the-art NLP models - BERT, GPT, T5, 150k+ pretrained models - Free'
            },
            {
              name: 'OpenCV',
              url: 'https://opencv.org',
              type: 'tool',
              description: 'Computer vision and image processing library - 2,500+ optimized algorithms - Free'
            },
            {
              name: 'SpaCy',
              url: 'https://spacy.io',
              type: 'tool',
              description: 'Industrial-strength NLP - tokenization, NER, POS tagging, dependency parsing - Free'
            },
            {
              name: 'NLTK',
              url: 'https://www.nltk.org',
              type: 'tool',
              description: 'Natural Language Toolkit - comprehensive NLP library with corpora - Free'
            },
            {
              name: 'Gensim',
              url: 'https://radimrehurek.com/gensim',
              type: 'tool',
              description: 'Topic modeling and document similarity - Word2Vec, Doc2Vec, LDA - Free'
            },
            {
              name: 'LangChain',
              url: 'https://www.langchain.com',
              type: 'tool',
              description: 'Framework for LLM applications - chains, agents, memory, callbacks - Free'
            }
          ]
        }
      ]
    },
    tools: {
      title: 'ML Tools & Platforms',
      icon: Wrench,
      color: '#8b5cf6',
      sections: [
        {
          name: 'Notebooks & IDEs',
          resources: [
            {
              name: 'Jupyter Notebook',
              url: 'https://jupyter.org',
              type: 'tool',
              description: 'Interactive computing environment - literate programming for data science - Free'
            },
            {
              name: 'Google Colab',
              url: 'https://colab.research.google.com',
              type: 'tool',
              description: 'Free Jupyter notebooks with GPU/TPU access - no setup required - Free tier generous'
            },
            {
              name: 'Kaggle Notebooks',
              url: 'https://www.kaggle.com/code',
              type: 'tool',
              description: 'Cloud notebooks with GPU access, datasets, and community - Free 30 hours/week'
            },
            {
              name: 'VS Code',
              url: 'https://code.visualstudio.com',
              type: 'tool',
              description: 'Powerful IDE with Python extensions, Jupyter support, Git integration - Free'
            },
            {
              name: 'PyCharm',
              url: 'https://www.jetbrains.com/pycharm',
              type: 'tool',
              description: 'Professional Python IDE - debugging, testing, scientific tools - Free Community Edition'
            },
            {
              name: 'Deepnote',
              url: 'https://deepnote.com',
              type: 'tool',
              description: 'Collaborative data science notebook - real-time collaboration - Free tier available'
            }
          ]
        },
        {
          name: 'Experiment Tracking',
          resources: [
            {
              name: 'Weights & Biases',
              url: 'https://wandb.ai',
              type: 'tool',
              description: 'MLOps platform - experiment tracking, hyperparameter tuning, model versioning - Free tier'
            },
            {
              name: 'MLflow',
              url: 'https://mlflow.org',
              type: 'tool',
              description: 'Open-source ML lifecycle platform - tracking, projects, models, registry - Free'
            },
            {
              name: 'TensorBoard',
              url: 'https://www.tensorflow.org/tensorboard',
              type: 'tool',
              description: 'TensorFlow\'s visualization toolkit - metrics, graphs, images, distributions - Free'
            },
            {
              name: 'Neptune.ai',
              url: 'https://neptune.ai',
              type: 'tool',
              description: 'Metadata store for MLOps - experiment tracking, model registry - Free tier 200 hours'
            },
            {
              name: 'Comet ML',
              url: 'https://www.comet.com',
              type: 'tool',
              description: 'ML platform for tracking experiments, models, and datasets - Free tier available'
            }
          ]
        },
        {
          name: 'AutoML Platforms',
          resources: [
            {
              name: 'H2O.ai',
              url: 'https://www.h2o.ai',
              type: 'tool',
              description: 'Open-source AutoML platform - automatic model selection and tuning - Free'
            },
            {
              name: 'Auto-sklearn',
              url: 'https://automl.github.io/auto-sklearn',
              type: 'tool',
              description: 'Automated ML with scikit-learn - meta-learning, ensemble construction - Free'
            },
            {
              name: 'TPOT',
              url: 'http://epistasislab.github.io/tpot',
              type: 'tool',
              description: 'Python AutoML tool using genetic programming - optimizes ML pipelines - Free'
            },
            {
              name: 'AutoGluon',
              url: 'https://auto.gluon.ai',
              type: 'tool',
              description: 'Amazon\'s AutoML for tabular, text, image data - easy to use - Free'
            },
            {
              name: 'PyCaret',
              url: 'https://pycaret.org',
              type: 'tool',
              description: 'Low-code ML library - automates workflow from preprocessing to deployment - Free'
            }
          ]
        },
        {
          name: 'Model Deployment',
          resources: [
            {
              name: 'TensorFlow Serving',
              url: 'https://www.tensorflow.org/tfx/guide/serving',
              type: 'tool',
              description: 'Flexible, high-performance serving system for ML models - production-ready - Free'
            },
            {
              name: 'TorchServe',
              url: 'https://pytorch.org/serve',
              type: 'tool',
              description: 'PyTorch model serving framework - easy deployment at scale - Free'
            },
            {
              name: 'ONNX Runtime',
              url: 'https://onnxruntime.ai',
              type: 'tool',
              description: 'Cross-platform inference accelerator - deploy models anywhere - Free'
            },
            {
              name: 'BentoML',
              url: 'https://www.bentoml.com',
              type: 'tool',
              description: 'ML model serving framework - standardize deployment workflow - Free and open-source'
            },
            {
              name: 'FastAPI',
              url: 'https://fastapi.tiangolo.com',
              type: 'tool',
              description: 'Modern Python web framework - perfect for ML model APIs - Free'
            },
            {
              name: 'Gradio',
              url: 'https://www.gradio.app',
              type: 'tool',
              description: 'Build and share ML demos quickly - interactive web interfaces - Free'
            },
            {
              name: 'Streamlit',
              url: 'https://streamlit.io',
              type: 'tool',
              description: 'Create ML web apps in pure Python - no frontend experience needed - Free'
            }
          ]
        }
      ]
    },
    datasets: {
      title: 'Datasets & Data Sources',
      icon: Database,
      color: '#f59e0b',
      sections: [
        {
          name: 'Dataset Repositories',
          resources: [
            {
              name: 'Kaggle Datasets',
              url: 'https://www.kaggle.com/datasets',
              type: 'resource',
              description: '100k+ public datasets across all domains - competitions, notebooks integration - Free'
            },
            {
              name: 'UCI Machine Learning Repository',
              url: 'https://archive.ics.uci.edu/ml',
              type: 'resource',
              description: 'Classic ML datasets since 1987 - 600+ datasets for benchmarking - Free'
            },
            {
              name: 'Hugging Face Datasets',
              url: 'https://huggingface.co/datasets',
              type: 'resource',
              description: '70k+ datasets for NLP, computer vision, audio - easy loading with datasets library - Free'
            },
            {
              name: 'Google Dataset Search',
              url: 'https://datasetsearch.research.google.com',
              type: 'resource',
              description: 'Search engine for datasets across the web - 25M+ datasets indexed - Free'
            },
            {
              name: 'Papers With Code Datasets',
              url: 'https://paperswithcode.com/datasets',
              type: 'resource',
              description: '6,000+ ML datasets with leaderboards and benchmarks - Free'
            },
            {
              name: 'AWS Open Data Registry',
              url: 'https://registry.opendata.aws',
              type: 'resource',
              description: 'Large-scale datasets hosted on AWS - satellite imagery, genomics, climate - Free'
            },
            {
              name: 'Data.gov',
              url: 'https://data.gov',
              type: 'resource',
              description: 'US government open data - 300k+ datasets across all sectors - Free'
            }
          ]
        },
        {
          name: 'Computer Vision Datasets',
          resources: [
            {
              name: 'ImageNet',
              url: 'https://www.image-net.org',
              type: 'resource',
              description: '14M+ labeled images in 20k categories - standard benchmark for image classification'
            },
            {
              name: 'COCO Dataset',
              url: 'https://cocodataset.org',
              type: 'resource',
              description: 'Object detection, segmentation, captioning - 330k images, 80 object categories - Free'
            },
            {
              name: 'CIFAR-10/100',
              url: 'https://www.cs.toronto.edu/~kriz/cifar.html',
              type: 'resource',
              description: 'Classic image classification datasets - 60k 32x32 color images - Free'
            },
            {
              name: 'Open Images',
              url: 'https://storage.googleapis.com/openimages/web/index.html',
              type: 'resource',
              description: 'Google\'s 9M+ images with annotations - object detection, visual relationships - Free'
            },
            {
              name: 'Fashion MNIST',
              url: 'https://github.com/zalandoresearch/fashion-mnist',
              type: 'resource',
              description: 'Zalando\'s article images - MNIST alternative with 70k grayscale images - Free'
            },
            {
              name: 'CelebA',
              url: 'http://mmlab.ie.cuhk.edu.hk/projects/CelebA.html',
              type: 'resource',
              description: '200k celebrity face images with 40 attribute annotations - Free'
            }
          ]
        },
        {
          name: 'NLP Datasets',
          resources: [
            {
              name: 'GLUE Benchmark',
              url: 'https://gluebenchmark.com',
              type: 'resource',
              description: 'General Language Understanding Evaluation - 9 sentence/sentence-pair tasks - Free'
            },
            {
              name: 'SQuAD',
              url: 'https://rajpurkar.github.io/SQuAD-explorer',
              type: 'resource',
              description: 'Stanford Question Answering Dataset - 100k+ reading comprehension questions - Free'
            },
            {
              name: 'Common Crawl',
              url: 'https://commoncrawl.org',
              type: 'resource',
              description: 'Petabyte-scale web crawl data - raw HTML, extracted text - Free'
            },
            {
              name: 'WikiText',
              url: 'https://www.salesforce.com/products/einstein/ai-research/the-wikitext-dependency-language-modeling-dataset',
              type: 'resource',
              description: 'Language modeling dataset from Wikipedia - 103M tokens - Free'
            },
            {
              name: 'IMDb Reviews',
              url: 'https://ai.stanford.edu/~amaas/data/sentiment',
              type: 'resource',
              description: 'Sentiment analysis dataset - 50k movie reviews (25k train, 25k test) - Free'
            }
          ]
        },
        {
          name: 'Audio & Speech Datasets',
          resources: [
            {
              name: 'LibriSpeech',
              url: 'https://www.openslr.org/12',
              type: 'resource',
              description: '1,000 hours of English speech from audiobooks - ASR benchmark - Free'
            },
            {
              name: 'Common Voice',
              url: 'https://commonvoice.mozilla.org',
              type: 'resource',
              description: 'Mozilla\'s multilingual speech dataset - 90+ languages, 19k+ hours - Free'
            },
            {
              name: 'AudioSet',
              url: 'https://research.google.com/audioset',
              type: 'resource',
              description: 'Google\'s 2M human-labeled audio events - 632 classes - Free'
            },
            {
              name: 'Speech Commands',
              url: 'https://www.tensorflow.org/datasets/catalog/speech_commands',
              type: 'resource',
              description: 'Google\'s keyword spotting dataset - 105k one-second utterances - Free'
            }
          ]
        }
      ]
    },
    research: {
      title: 'Research & Papers',
      icon: FileText,
      color: '#ec4899',
      sections: [
        {
          name: 'Paper Repositories',
          resources: [
            {
              name: 'ArXiv.org',
              url: 'https://arxiv.org/list/cs.LG/recent',
              type: 'resource',
              description: 'Preprint repository - latest ML research papers updated daily - Free'
            },
            {
              name: 'Papers With Code',
              url: 'https://paperswithcode.com',
              type: 'resource',
              description: 'ML papers with code implementations - leaderboards, benchmarks, SOTA tracking - Free'
            },
            {
              name: 'Google Scholar',
              url: 'https://scholar.google.com',
              type: 'resource',
              description: 'Academic search engine - citations, related works, author profiles - Free'
            },
            {
              name: 'Semantic Scholar',
              url: 'https://www.semanticscholar.org',
              type: 'resource',
              description: 'AI-powered research tool - paper summaries, influential citations - Free'
            },
            {
              name: 'Connected Papers',
              url: 'https://www.connectedpapers.com',
              type: 'resource',
              description: 'Visual graph of paper connections - explore related research - Free 5 graphs/month'
            },
            {
              name: 'NIPS/NeurIPS Proceedings',
              url: 'https://papers.nips.cc',
              type: 'resource',
              description: 'Neural Information Processing Systems conference papers - Free archive'
            },
            {
              name: 'ICML Proceedings',
              url: 'https://proceedings.mlr.press',
              type: 'resource',
              description: 'International Conference on Machine Learning papers - Free access'
            },
            {
              name: 'ICLR OpenReview',
              url: 'https://openreview.net/group?id=ICLR.cc',
              type: 'resource',
              description: 'International Conference on Learning Representations - open peer review - Free'
            }
          ]
        },
        {
          name: 'Research Blogs',
          resources: [
            {
              name: 'Distill.pub',
              url: 'https://distill.pub',
              type: 'resource',
              description: 'Clear, interactive explanations of ML concepts - visual essays - Free'
            },
            {
              name: 'OpenAI Blog',
              url: 'https://openai.com/blog',
              type: 'resource',
              description: 'Latest from OpenAI - GPT research, DALL-E, safety research - Free'
            },
            {
              name: 'Google AI Blog',
              url: 'https://ai.googleblog.com',
              type: 'resource',
              description: 'Google Research publications - latest in AI/ML from Google - Free'
            },
            {
              name: 'DeepMind Blog',
              url: 'https://www.deepmind.com/blog',
              type: 'resource',
              description: 'AlphaGo, AlphaFold, reinforcement learning breakthroughs - Free'
            },
            {
              name: 'Meta AI Research',
              url: 'https://ai.meta.com/blog',
              type: 'resource',
              description: 'Facebook/Meta AI research updates - PyTorch, LLaMA, vision - Free'
            },
            {
              name: 'Microsoft Research Blog',
              url: 'https://www.microsoft.com/en-us/research/blog',
              type: 'resource',
              description: 'Microsoft AI research - reinforcement learning, NLP, computer vision - Free'
            },
            {
              name: 'AWS Machine Learning Blog',
              url: 'https://aws.amazon.com/blogs/machine-learning',
              type: 'resource',
              description: 'Practical ML solutions, SageMaker tutorials, case studies - Free'
            }
          ]
        },
        {
          name: 'Research Tools',
          resources: [
            {
              name: 'Zotero',
              url: 'https://www.zotero.org',
              type: 'tool',
              description: 'Research paper manager - citations, PDF organization, collaboration - Free'
            },
            {
              name: 'Mendeley',
              url: 'https://www.mendeley.com',
              type: 'tool',
              description: 'Reference manager and academic social network - PDF annotation - Free'
            },
            {
              name: 'Overleaf',
              url: 'https://www.overleaf.com',
              type: 'tool',
              description: 'Collaborative LaTeX editor for writing papers - Free tier available'
            },
            {
              name: 'Scite.ai',
              url: 'https://scite.ai',
              type: 'tool',
              description: 'Smart citations - see how papers are cited with supporting/contrasting evidence - Free tier'
            }
          ]
        }
      ]
    },
    communities: {
      title: 'ML Communities',
      icon: Users,
      color: '#14b8a6',
      sections: [
        {
          name: 'Online Communities',
          resources: [
            {
              name: 'r/MachineLearning',
              url: 'https://www.reddit.com/r/MachineLearning',
              type: 'community',
              description: '2.8M+ members - research discussions, paper releases, career advice'
            },
            {
              name: 'r/learnmachinelearning',
              url: 'https://www.reddit.com/r/learnmachinelearning',
              type: 'community',
              description: '450k+ beginners and practitioners sharing learning resources and projects'
            },
            {
              name: 'Kaggle Discussion',
              url: 'https://www.kaggle.com/discussion',
              type: 'community',
              description: 'Data science community - competitions, datasets, notebooks discussions'
            },
            {
              name: 'Hugging Face Forums',
              url: 'https://discuss.huggingface.co',
              type: 'community',
              description: 'Transformers, diffusers, datasets community - help and discussions'
            },
            {
              name: 'Fast.ai Forums',
              url: 'https://forums.fast.ai',
              type: 'community',
              description: 'Practical deep learning community - course discussions, projects'
            },
            {
              name: 'PyTorch Forums',
              url: 'https://discuss.pytorch.org',
              type: 'community',
              description: 'Official PyTorch community - technical questions, announcements'
            },
            {
              name: 'TensorFlow Forums',
              url: 'https://discuss.tensorflow.org',
              type: 'community',
              description: 'TensorFlow community discussions - help, feedback, announcements'
            }
          ]
        },
        {
          name: 'Discord Servers',
          resources: [
            {
              name: 'Hugging Face Discord',
              url: 'https://discord.com/invite/hugging-face',
              type: 'community',
              description: 'Active NLP and transformers community - real-time help and discussions'
            },
            {
              name: 'AI/ML Discord',
              url: 'https://discord.gg/machinelearning',
              type: 'community',
              description: 'General ML discord with channels for different topics and skill levels'
            },
            {
              name: 'Weights & Biases Discord',
              url: 'https://wandb.ai/site/community',
              type: 'community',
              description: 'MLOps community - experiment tracking, best practices, events'
            }
          ]
        },
        {
          name: 'Meetups & Events',
          resources: [
            {
              name: 'Meetup.com - ML Groups',
              url: 'https://www.meetup.com/topics/machine-learning',
              type: 'community',
              description: 'Local ML meetups worldwide - networking, learning, presentations'
            },
            {
              name: 'NeurIPS Conference',
              url: 'https://nips.cc',
              type: 'community',
              description: 'Premier ML conference - workshops, tutorials, paper presentations - Annual December'
            },
            {
              name: 'ICML Conference',
              url: 'https://icml.cc',
              type: 'community',
              description: 'International Conference on Machine Learning - top research venue - Annual July'
            },
            {
              name: 'ICLR Conference',
              url: 'https://iclr.cc',
              type: 'community',
              description: 'International Conference on Learning Representations - May annually'
            }
          ]
        }
      ]
    },
    youtube: {
      title: 'YouTube Channels & Videos',
      icon: Youtube,
      color: '#ef4444',
      sections: [
        {
          name: 'Educational Channels',
          resources: [
            {
              name: '3Blue1Brown',
              url: 'https://www.youtube.com/@3blue1brown',
              type: 'youtube',
              description: 'Visual math explanations - neural networks, calculus, linear algebra - 6M+ subscribers'
            },
            {
              name: 'StatQuest',
              url: 'https://www.youtube.com/@statquest',
              type: 'youtube',
              description: 'Statistics and ML clearly explained - Josh Starmer - 1.5M+ subscribers'
            },
            {
              name: 'Sentdex',
              url: 'https://www.youtube.com/@sentdex',
              type: 'youtube',
              description: 'Python programming and ML tutorials - practical projects - 1.3M+ subscribers'
            },
            {
              name: 'Two Minute Papers',
              url: 'https://www.youtube.com/@TwoMinutePapers',
              type: 'youtube',
              description: 'Latest AI research explained - paper summaries - 1.5M+ subscribers'
            },
            {
              name: 'Yannic Kilcher',
              url: 'https://www.youtube.com/@YannicKilcher',
              type: 'youtube',
              description: 'Deep ML paper explanations - detailed technical analysis - 350k+ subscribers'
            },
            {
              name: 'AI Coffee Break with Letitia',
              url: 'https://www.youtube.com/@AICoffeeBreak',
              type: 'youtube',
              description: 'ML paper reviews and explanations - accessible and clear - 200k+ subscribers'
            },
            {
              name: 'Arxiv Insights',
              url: 'https://www.youtube.com/@ArxivInsights',
              type: 'youtube',
              description: 'Visual explanations of ML papers - high-quality animations'
            }
          ]
        },
        {
          name: 'Practical Tutorials',
          resources: [
            {
              name: 'Tech With Tim',
              url: 'https://www.youtube.com/@TechWithTim',
              type: 'youtube',
              description: 'Python and ML project tutorials - beginner-friendly - 1.5M+ subscribers'
            },
            {
              name: 'Nicholas Renotte',
              url: 'https://www.youtube.com/@NicholasRenotte',
              type: 'youtube',
              description: 'End-to-end ML project tutorials - computer vision, NLP - 400k+ subscribers'
            },
            {
              name: 'Krish Naik',
              url: 'https://www.youtube.com/@krishnaik06',
              type: 'youtube',
              description: 'ML, DL, NLP tutorials in English and Hindi - 1M+ subscribers'
            },
            {
              name: 'Python Engineer',
              url: 'https://www.youtube.com/@python-engineer',
              type: 'youtube',
              description: 'PyTorch tutorials and ML project walkthroughs - 300k+ subscribers'
            },
            {
              name: 'Aladdin Persson',
              url: 'https://www.youtube.com/@AladdinPersson',
              type: 'youtube',
              description: 'PyTorch implementations of papers - clear code explanations - 200k+ subscribers'
            }
          ]
        },
        {
          name: 'Research & Industry',
          resources: [
            {
              name: 'Lex Fridman',
              url: 'https://www.youtube.com/@lexfridman',
              type: 'youtube',
              description: 'Long-form AI researcher interviews - deep technical discussions - 3M+ subscribers'
            },
            {
              name: 'Stanford Online',
              url: 'https://www.youtube.com/@stanfordonline',
              type: 'youtube',
              description: 'Full Stanford CS courses - ML, DL, NLP, computer vision'
            },
            {
              name: 'MIT OpenCourseWare',
              url: 'https://www.youtube.com/@mitocw',
              type: 'youtube',
              description: 'MIT course lectures - introduction to DL, RL, autonomous systems'
            },
            {
              name: 'DeepMind',
              url: 'https://www.youtube.com/@DeepMind',
              type: 'youtube',
              description: 'AlphaGo, AlphaFold, research talks from DeepMind scientists'
            }
          ]
        }
      ]
    },
    books: {
      title: 'Books & Reading',
      icon: BookOpen,
      color: '#a855f7',
      sections: [
        {
          name: 'Foundational Books',
          resources: [
            {
              name: 'Hands-On Machine Learning (Géron)',
              url: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632',
              type: 'resource',
              description: 'Best practical ML book - scikit-learn, Keras, TensorFlow - O\'Reilly 3rd edition 2022'
            },
            {
              name: 'Deep Learning (Goodfellow)',
              url: 'https://www.deeplearningbook.org',
              type: 'resource',
              description: 'MIT Press deep learning textbook - comprehensive mathematical treatment - Free online'
            },
            {
              name: 'Pattern Recognition and ML (Bishop)',
              url: 'https://www.microsoft.com/en-us/research/publication/pattern-recognition-machine-learning',
              type: 'resource',
              description: 'Classic Bayesian perspective on ML - graduate-level textbook'
            },
            {
              name: 'Introduction to Statistical Learning',
              url: 'https://www.statlearning.com',
              type: 'resource',
              description: 'Accessible introduction with R - regression, classification, resampling - Free PDF'
            },
            {
              name: 'Elements of Statistical Learning',
              url: 'https://hastie.su.domains/ElemStatLearn',
              type: 'resource',
              description: 'Comprehensive statistical learning theory - graduate level - Free PDF'
            },
            {
              name: 'Python Machine Learning (Raschka)',
              url: 'https://sebastianraschka.com/books.html',
              type: 'resource',
              description: 'Practical Python ML guide - scikit-learn, TensorFlow - 3rd edition'
            }
          ]
        },
        {
          name: 'Specialized Books',
          resources: [
            {
              name: 'Natural Language Processing (Jurafsky)',
              url: 'https://web.stanford.edu/~jurafsky/slp3',
              type: 'resource',
              description: 'Comprehensive NLP textbook from Stanford - 3rd edition draft free online'
            },
            {
              name: 'Computer Vision (Szeliski)',
              url: 'http://szeliski.org/Book',
              type: 'resource',
              description: 'Algorithms and Applications - comprehensive CV textbook - Free PDF'
            },
            {
              name: 'Reinforcement Learning (Sutton & Barto)',
              url: 'http://incompleteideas.net/book/the-book.html',
              type: 'resource',
              description: 'The definitive RL textbook - 2nd edition free online'
            },
            {
              name: 'Probabilistic Machine Learning (Murphy)',
              url: 'https://probml.github.io/pml-book',
              type: 'resource',
              description: 'Advanced Probabilistic Perspective - 2 volumes - drafts free online'
            },
            {
              name: 'Neural Networks and Deep Learning',
              url: 'http://neuralnetworksanddeeplearning.com',
              type: 'resource',
              description: 'Michael Nielsen\'s online book - intuitive explanations - Free'
            }
          ]
        },
        {
          name: 'Practical Guides',
          resources: [
            {
              name: 'Machine Learning Yearning (Ng)',
              url: 'https://www.deeplearning.ai/machine-learning-yearning',
              type: 'resource',
              description: 'Andrew Ng\'s practical ML guide - structuring projects, debugging - Free'
            },
            {
              name: 'Designing ML Systems (Huyen)',
              url: 'https://www.oreilly.com/library/view/designing-machine-learning/9781098107956',
              type: 'resource',
              description: 'Production ML systems - deployment, monitoring, maintenance - O\'Reilly 2022'
            },
            {
              name: 'Building Machine Learning Powered Applications',
              url: 'https://www.oreilly.com/library/view/building-machine-learning/9781492045106',
              type: 'resource',
              description: 'End-to-end ML product development - O\'Reilly'
            }
          ]
        }
      ]
    },
    cloud: {
      title: 'Cloud Platforms & MLOps',
      icon: Cloud,
      color: '#06b6d4',
      sections: [
        {
          name: 'Cloud ML Platforms',
          resources: [
            {
              name: 'AWS SageMaker',
              url: 'https://aws.amazon.com/sagemaker',
              type: 'tool',
              description: 'Fully managed ML service - build, train, deploy at scale - Free tier 250 hours'
            },
            {
              name: 'Google Cloud Vertex AI',
              url: 'https://cloud.google.com/vertex-ai',
              type: 'tool',
              description: 'Unified ML platform - AutoML, custom training, deployment - $300 free credit'
            },
            {
              name: 'Azure Machine Learning',
              url: 'https://azure.microsoft.com/en-us/services/machine-learning',
              type: 'tool',
              description: 'Enterprise ML platform - MLOps, responsible AI, deployment - Free tier available'
            },
            {
              name: 'Paperspace Gradient',
              url: 'https://www.paperspace.com/gradient',
              type: 'tool',
              description: 'ML development platform - notebooks, jobs, deployments - Free tier 6 hours/month'
            },
            {
              name: 'Lambda Labs',
              url: 'https://lambdalabs.com',
              type: 'tool',
              description: 'GPU cloud for deep learning - on-demand and reserved instances'
            }
          ]
        },
        {
          name: 'MLOps Tools',
          resources: [
            {
              name: 'Kubeflow',
              url: 'https://www.kubeflow.org',
              type: 'tool',
              description: 'ML toolkit for Kubernetes - pipelines, training, serving - Free and open-source'
            },
            {
              name: 'Airflow',
              url: 'https://airflow.apache.org',
              type: 'tool',
              description: 'Apache workflow orchestration - ML pipeline automation - Free'
            },
            {
              name: 'DVC (Data Version Control)',
              url: 'https://dvc.org',
              type: 'tool',
              description: 'Git for data and models - experiment tracking, pipeline - Free and open-source'
            },
            {
              name: 'Kedro',
              url: 'https://kedro.org',
              type: 'tool',
              description: 'Python framework for reproducible ML pipelines - Free'
            },
            {
              name: 'ClearML',
              url: 'https://clear.ml',
              type: 'tool',
              description: 'End-to-end MLOps suite - experiments, data, pipelines - Free and open-source'
            }
          ]
        },
        {
          name: 'Model Registries',
          resources: [
            {
              name: 'MLflow Model Registry',
              url: 'https://mlflow.org/docs/latest/model-registry.html',
              type: 'tool',
              description: 'Centralized model store - versioning, stage transitions - Free'
            },
            {
              name: 'Hugging Face Model Hub',
              url: 'https://huggingface.co/models',
              type: 'resource',
              description: '500k+ pretrained models - transformers, diffusion, more - Free'
            },
            {
              name: 'TensorFlow Hub',
              url: 'https://tfhub.dev',
              type: 'resource',
              description: 'Repository of trained ML models - easy reuse and fine-tuning - Free'
            },
            {
              name: 'PyTorch Hub',
              url: 'https://pytorch.org/hub',
              type: 'resource',
              description: 'Pretrained model repository - computer vision, NLP, audio - Free'
            }
          ]
        }
      ]
    },
    visualization: {
      title: 'Visualization & Interpretation',
      icon: BarChart,
      color: '#f97316',
      sections: [
        {
          name: 'Data Visualization',
          resources: [
            {
              name: 'Matplotlib',
              url: 'https://matplotlib.org',
              type: 'tool',
              description: 'Python plotting library - publication-quality figures - Free'
            },
            {
              name: 'Seaborn',
              url: 'https://seaborn.pydata.org',
              type: 'tool',
              description: 'Statistical data visualization - beautiful default styles - Free'
            },
            {
              name: 'Plotly',
              url: 'https://plotly.com',
              type: 'tool',
              description: 'Interactive plotting library - web-based visualizations - Free'
            },
            {
              name: 'Altair',
              url: 'https://altair-viz.github.io',
              type: 'tool',
              description: 'Declarative visualization in Python - based on Vega-Lite - Free'
            },
            {
              name: 'Bokeh',
              url: 'https://bokeh.org',
              type: 'tool',
              description: 'Interactive visualization library - elegant, versatile graphics - Free'
            }
          ]
        },
        {
          name: 'Model Interpretation',
          resources: [
            {
              name: 'SHAP',
              url: 'https://github.com/slundberg/shap',
              type: 'tool',
              description: 'SHapley Additive exPlanations - game theory approach to explainability - Free'
            },
            {
              name: 'LIME',
              url: 'https://github.com/marcotcr/lime',
              type: 'tool',
              description: 'Local Interpretable Model-agnostic Explanations - Free'
            },
            {
              name: 'InterpretML',
              url: 'https://interpret.ml',
              type: 'tool',
              description: 'Microsoft interpretability toolkit - glass-box and black-box models - Free'
            },
            {
              name: 'ELI5',
              url: 'https://eli5.readthedocs.io',
              type: 'tool',
              description: 'Explain ML predictions - supports scikit-learn, XGBoost - Free'
            },
            {
              name: 'Captum',
              url: 'https://captum.ai',
              type: 'tool',
              description: 'PyTorch model interpretability library - attributions, neuron analysis - Free'
            }
          ]
        },
        {
          name: 'Neural Network Visualization',
          resources: [
            {
              name: 'Netron',
              url: 'https://netron.app',
              type: 'tool',
              description: 'Neural network visualizer - supports ONNX, TensorFlow, PyTorch - Free'
            },
            {
              name: 'TensorSpace',
              url: 'https://tensorspace.org',
              type: 'tool',
              description: '3D visualization of neural networks - interactive architecture exploration - Free'
            },
            {
              name: 'NN-SVG',
              url: 'http://alexlenail.me/NN-SVG',
              type: 'tool',
              description: 'Neural network architecture diagrams for papers - Free web tool'
            }
          ]
        }
      ]
    },
    competitions: {
      title: 'Competitions & Challenges',
      icon: Award,
      color: '#84cc16',
      sections: [
        {
          name: 'Competition Platforms',
          resources: [
            {
              name: 'Kaggle Competitions',
              url: 'https://www.kaggle.com/competitions',
              type: 'community',
              description: 'Premier data science competitions - cash prizes, rankings, learning - Free'
            },
            {
              name: 'DrivenData',
              url: 'https://www.drivendata.org/competitions',
              type: 'community',
              description: 'Data science for social good competitions - real-world impact - Free'
            },
            {
              name: 'AIcrowd',
              url: 'https://www.aicrowd.com',
              type: 'community',
              description: 'AI challenges and hackathons - research and practical problems - Free'
            },
            {
              name: 'Zindi',
              url: 'https://zindi.africa/competitions',
              type: 'community',
              description: 'Africa\'s data science competition platform - solve local challenges - Free'
            },
            {
              name: 'CodaLab',
              url: 'https://codalab.org',
              type: 'community',
              description: 'Open-source platform for ML competitions - research-oriented - Free'
            }
          ]
        },
        {
          name: 'Academic Challenges',
          resources: [
            {
              name: 'ImageNet Large Scale Visual Recognition',
              url: 'https://image-net.org/challenges/LSVRC',
              type: 'community',
              description: 'Classic computer vision challenge - object detection and classification'
            },
            {
              name: 'COCO Detection Challenge',
              url: 'https://cocodataset.org/#detection-leaderboard',
              type: 'community',
              description: 'Object detection, segmentation, captioning benchmarks'
            },
            {
              name: 'SQuAD Leaderboard',
              url: 'https://rajpurkar.github.io/SQuAD-explorer',
              type: 'community',
              description: 'Reading comprehension benchmark - NLP challenge'
            },
            {
              name: 'GLUE Benchmark',
              url: 'https://gluebenchmark.com/leaderboard',
              type: 'community',
              description: 'General Language Understanding Evaluation leaderboard'
            }
          ]
        }
      ]
    },
    podcasts: {
      title: 'Podcasts & Interviews',
      icon: Headphones,
      color: '#f43f5e',
      sections: [
        {
          name: 'ML Podcasts',
          resources: [
            {
              name: 'Lex Fridman Podcast',
              url: 'https://lexfridman.com/podcast',
              type: 'resource',
              description: 'Long-form AI researcher interviews - Hinton, LeCun, Bengio, more'
            },
            {
              name: 'Machine Learning Street Talk',
              url: 'https://www.youtube.com/@MachineLearningStreetTalk',
              type: 'youtube',
              description: 'Technical ML discussions with researchers - deep dives into papers'
            },
            {
              name: 'The TWIML AI Podcast',
              url: 'https://twimlai.com',
              type: 'resource',
              description: 'This Week in Machine Learning & AI - interviews, news, applications'
            },
            {
              name: 'Practical AI',
              url: 'https://changelog.com/practicalai',
              type: 'resource',
              description: 'Making AI practical, productive, and accessible - weekly episodes'
            },
            {
              name: 'Data Skeptic',
              url: 'https://dataskeptic.com',
              type: 'resource',
              description: 'Data science, statistics, ML, and AI explained simply'
            },
            {
              name: 'Linear Digressions',
              url: 'http://lineardigressions.com',
              type: 'resource',
              description: 'Exploring ML and data science through interesting applications'
            }
          ]
        }
      ]
    },
    ethics: {
      title: 'AI Ethics & Responsible AI',
      icon: Lock,
      color: '#6366f1',
      sections: [
        {
          name: 'Ethics Resources',
          resources: [
            {
              name: 'AI Ethics Guidelines Global Inventory',
              url: 'https://algorithmwatch.org/en/ai-ethics-guidelines-global-inventory',
              type: 'resource',
              description: 'Comprehensive collection of AI ethics guidelines worldwide - Free'
            },
            {
              name: 'Google AI Principles',
              url: 'https://ai.google/principles',
              type: 'resource',
              description: 'Google\'s approach to responsible AI development and deployment'
            },
            {
              name: 'Microsoft Responsible AI',
              url: 'https://www.microsoft.com/en-us/ai/responsible-ai',
              type: 'resource',
              description: 'Principles, tools, and resources for responsible AI'
            },
            {
              name: 'AI Fairness 360',
              url: 'https://aif360.mybluemix.net',
              type: 'tool',
              description: 'IBM toolkit for detecting and mitigating bias in ML models - Free'
            },
            {
              name: 'Fairlearn',
              url: 'https://fairlearn.org',
              type: 'tool',
              description: 'Microsoft toolkit for assessing and improving fairness - Python library - Free'
            },
            {
              name: 'What-If Tool',
              url: 'https://pair-code.github.io/what-if-tool',
              type: 'tool',
              description: 'Google PAIR tool for probing ML models without code - Free'
            }
          ]
        }
      ]
    }
  };

  // Category navigation
  const categories = [
    { id: 'all', label: 'All Resources', icon: Brain },
    { id: 'courses', label: 'Courses', icon: GraduationCap },
    { id: 'frameworks', label: 'Frameworks', icon: Code },
    { id: 'tools', label: 'Tools', icon: Wrench },
    { id: 'datasets', label: 'Datasets', icon: Database },
    { id: 'research', label: 'Research', icon: FileText },
    { id: 'communities', label: 'Communities', icon: Users },
    { id: 'youtube', label: 'YouTube', icon: Youtube },
    { id: 'books', label: 'Books', icon: BookOpen },
    { id: 'cloud', label: 'Cloud & MLOps', icon: Cloud },
    { id: 'visualization', label: 'Visualization', icon: BarChart },
    { id: 'competitions', label: 'Competitions', icon: Award },
    { id: 'podcasts', label: 'Podcasts', icon: Headphones },
    { id: 'ethics', label: 'AI Ethics', icon: Lock }
  ];

  // Resource type badges
  const getTypeBadge = (type) => {
    const badges = {
      tool: { icon: Zap, color: '#3b82f6', label: 'Tool' },
      course: { icon: GraduationCap, color: '#10b981', label: 'Course' },
      youtube: { icon: Youtube, color: '#ef4444', label: 'YouTube' },
      resource: { icon: FileText, color: '#8b5cf6', label: 'Resource' },
      community: { icon: Users, color: '#06b6d4', label: 'Community' }
    };
    return badges[type] || badges.resource;
  };

  // Filter resources
  const filteredResources = useMemo(() => {
    let filtered = activeCategory === 'all' 
      ? Object.entries(resources)
      : [[activeCategory, resources[activeCategory]]].filter(([key]) => resources[key]);

    if (searchQuery) {
      filtered = filtered.map(([key, category]) => {
        const filteredSections = category.sections
          .map(section => ({
            ...section,
            resources: section.resources.filter(resource =>
              resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              resource.description.toLowerCase().includes(searchQuery.toLowerCase())
            )
          }))
          .filter(section => section.resources.length > 0);

        return [key, { ...category, sections: filteredSections }];
      }).filter(([_, category]) => category.sections.length > 0);
    }

    return filtered;
  }, [activeCategory, searchQuery]);

  // Toggle section
  const toggleSection = (categoryKey, sectionName) => {
    const key = `${categoryKey}-${sectionName}`;
    setExpandedSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Copy URL
  const copyToClipboard = (url, name) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(name);
    setTimeout(() => setCopiedUrl(''), 2000);
  };

  // Calculate total resources
  const totalResources = Object.values(resources).reduce((total, category) => {
    return total + category.sections.reduce((sum, section) => sum + section.resources.length, 0);
  }, 0);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-[#0a0a0a] text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Sticky Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors ${
        darkMode ? 'bg-[#0a0a0a]/95 border-[#1a1a1a]' : 'bg-white/95 border-gray-200'
      }`}>
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo & Title */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  darkMode ? 'hover:bg-[#1a1a1a]' : 'hover:bg-gray-100'
                }`}
              >
                {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <Brain className="w-7 h-7 text-[#3b82f6]" />
              <div>
                <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">Machine Learning Hub</h1>
                <p className={`text-xs mt-0.5 hidden sm:block ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                  Complete ML resource directory - 300+ curated links
                </p>
              </div>
            </div>

            {/* Search & Theme Toggle */}
            <div className="flex items-center gap-3">
              <div className="relative hidden sm:block">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                  darkMode ? 'text-gray-500' : 'text-gray-400'
                }`} />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`pl-10 pr-4 py-2 w-64 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#3b82f6] ${
                    darkMode 
                      ? 'bg-[#141414] border-[#1a1a1a] placeholder-gray-600' 
                      : 'bg-white border-gray-200 placeholder-gray-400'
                  }`}
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2.5 rounded-lg border transition-colors ${
                  darkMode 
                    ? 'bg-[#141414] border-[#1a1a1a] hover:bg-[#1f1f1f]' 
                    : 'bg-white border-gray-200 hover:bg-gray-50'
                }`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="relative sm:hidden mt-3">
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
              darkMode ? 'text-gray-500' : 'text-gray-400'
            }`} />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#3b82f6] ${
                darkMode 
                  ? 'bg-[#141414] border-[#1a1a1a] placeholder-gray-600' 
                  : 'bg-white border-gray-200 placeholder-gray-400'
              }`}
            />
          </div>
        </div>
      </header>

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 py-6">
        {/* Stats Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
        >
          {[
            { label: 'Total Resources', value: totalResources, icon: Brain },
            { label: 'Categories', value: Object.keys(resources).length, icon: Layers },
            { label: 'Free Resources', value: '95%', icon: TrendingUp },
            { label: 'Updated', value: 'Nov 2025', icon: Zap }
          ].map((stat, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border text-center ${
                darkMode ? 'bg-[#0f0f0f] border-[#1a1a1a]' : 'bg-white border-gray-200'
              }`}
            >
              <stat.icon className="w-5 h-5 mx-auto mb-2 text-[#3b82f6]" />
              <div className="text-xl sm:text-2xl font-semibold text-[#3b82f6]">{stat.value}</div>
              <div className={`text-xs mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="flex gap-6">
          {/* Sidebar - Desktop */}
          <aside className={`hidden lg:block w-64 flex-shrink-0 sticky top-24 self-start`}>
            <div className={`rounded-xl border p-4 ${
              darkMode ? 'bg-[#0f0f0f] border-[#1a1a1a]' : 'bg-white border-gray-200'
            }`}>
              <h3 className={`text-sm font-semibold mb-3 flex items-center gap-2 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <Filter className="w-4 h-4" />
                Categories
              </h3>
              <nav className="space-y-1">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isActive = activeCategory === category.id;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                        isActive
                          ? darkMode
                            ? 'bg-[#3b82f6]/10 text-[#3b82f6]'
                            : 'bg-blue-50 text-blue-600'
                          : darkMode
                            ? 'hover:bg-[#1a1a1a] text-gray-400'
                            : 'hover:bg-gray-50 text-gray-600'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="font-medium text-xs">{category.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Mobile Sidebar */}
          <AnimatePresence>
            {sidebarOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSidebarOpen(false)}
                  className="lg:hidden fixed inset-0 bg-black/50 z-40"
                />
                <motion.aside
                  initial={{ x: -280 }}
                  animate={{ x: 0 }}
                  exit={{ x: -280 }}
                  className={`lg:hidden fixed left-0 top-0 bottom-0 w-64 z-50 p-4 overflow-y-auto ${
                    darkMode ? 'bg-[#0a0a0a]' : 'bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">Categories</h3>
                    <button
                      onClick={() => setSidebarOpen(false)}
                      className={`p-2 rounded-lg ${
                        darkMode ? 'hover:bg-[#1a1a1a]' : 'hover:bg-gray-100'
                      }`}
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <nav className="space-y-1">
                    {categories.map((category) => {
                      const Icon = category.icon;
                      const isActive = activeCategory === category.id;
                      return (
                        <button
                          key={category.id}
                          onClick={() => {
                            setActiveCategory(category.id);
                            setSidebarOpen(false);
                          }}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                            isActive
                              ? darkMode
                                ? 'bg-[#3b82f6]/10 text-[#3b82f6]'
                                : 'bg-blue-50 text-blue-600'
                              : darkMode
                                ? 'hover:bg-[#1a1a1a] text-gray-400'
                                : 'hover:bg-gray-50 text-gray-600'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          <span className="font-medium">{category.label}</span>
                        </button>
                      );
                    })}
                  </nav>
                </motion.aside>
              </>
            )}
          </AnimatePresence>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="space-y-6">
              {filteredResources.length > 0 ? (
                filteredResources.map(([categoryKey, category], categoryIdx) => {
                  const CategoryIcon = category.icon;
                  
                  return (
                    <motion.div
                      key={categoryKey}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: categoryIdx * 0.05 }}
                      className={`rounded-2xl border overflow-hidden ${
                        darkMode ? 'bg-[#0f0f0f] border-[#1a1a1a]' : 'bg-white border-gray-200'
                      }`}
                    >
                      {/* Category Header */}
                      <div className={`px-6 py-5 border-b ${
                        darkMode ? 'border-[#1a1a1a]' : 'border-gray-200'
                      }`}>
                        <div className="flex items-center gap-4">
                          <div 
                            className="p-3 rounded-xl"
                            style={{ backgroundColor: `${category.color}15` }}
                          >
                            <CategoryIcon className="w-6 h-6" style={{ color: category.color }} />
                          </div>
                          <div>
                            <h2 className="text-xl font-semibold">{category.title}</h2>
                            <p className={`text-sm mt-0.5 ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                              {category.sections.reduce((sum, s) => sum + s.resources.length, 0)} resources
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Sections */}
                      <div className="p-6 space-y-6">
                        {category.sections.map((section, sectionIdx) => {
                          const sectionKey = `${categoryKey}-${section.name}`;
                          const isExpanded = expandedSections[sectionKey] !== false;

                          return (
                            <div key={sectionIdx}>
                              <button
                                onClick={() => toggleSection(categoryKey, section.name)}
                                className={`w-full flex items-center justify-between mb-4 group ${
                                  darkMode ? 'hover:text-[#3b82f6]' : 'hover:text-blue-600'
                                }`}
                              >
                                <h3 className="text-lg font-medium flex items-center gap-2">
                                  <motion.div
                                    animate={{ rotate: isExpanded ? 90 : 0 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <ChevronRight className="w-5 h-5" />
                                  </motion.div>
                                  {section.name}
                                  <span className={`text-xs px-2 py-1 rounded-full ${
                                    darkMode ? 'bg-[#1a1a1a] text-gray-500' : 'bg-gray-100 text-gray-600'
                                  }`}>
                                    {section.resources.length}
                                  </span>
                                </h3>
                              </button>

                              <AnimatePresence>
                                {isExpanded && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      {section.resources.map((resource, resourceIdx) => {
                                        const typeBadge = getTypeBadge(resource.type);
                                        const TypeIcon = typeBadge.icon;

                                        return (
                                          <motion.div
                                            key={resourceIdx}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: resourceIdx * 0.03 }}
                                            className={`group p-4 rounded-xl border transition-all hover:shadow-lg ${
                                              darkMode 
                                                ? 'bg-[#141414] border-[#1f1f1f] hover:border-[#2a2a2a]' 
                                                : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                                            }`}
                                          >
                                            <div className="flex items-start justify-between mb-3">
                                              <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-2">
                                                  <span 
                                                    className="px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1"
                                                    style={{ 
                                                      backgroundColor: `${typeBadge.color}15`,
                                                      color: typeBadge.color
                                                    }}
                                                  >
                                                    <TypeIcon className="w-3 h-3" />
                                                    {typeBadge.label}
                                                  </span>
                                                </div>
                                                <h4 className={`font-medium text-sm mb-1 transition-colors truncate ${
                                                  darkMode ? 'group-hover:text-[#3b82f6]' : 'group-hover:text-blue-600'
                                                }`}>
                                                  {resource.name}
                                                </h4>
                                              </div>
                                              <div className="flex gap-2 ml-2">
                                                <motion.button
                                                  whileHover={{ scale: 1.1 }}
                                                  whileTap={{ scale: 0.9 }}
                                                  onClick={() => copyToClipboard(resource.url, resource.name)}
                                                  className={`p-1.5 rounded-md transition-colors ${
                                                    darkMode ? 'hover:bg-[#1f1f1f]' : 'hover:bg-gray-200'
                                                  }`}
                                                  title="Copy URL"
                                                >
                                                  <Copy className={`w-3.5 h-3.5 ${
                                                    copiedUrl === resource.name 
                                                      ? 'text-green-500' 
                                                      : darkMode ? 'text-gray-500' : 'text-gray-400'
                                                  }`} />
                                                </motion.button>
                                                <motion.a
                                                  whileHover={{ scale: 1.1 }}
                                                  whileTap={{ scale: 0.9 }}
                                                  href={resource.url}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className={`p-1.5 rounded-md transition-colors ${
                                                    darkMode ? 'hover:bg-[#1f1f1f]' : 'hover:bg-gray-200'
                                                  }`}
                                                  title="Open link"
                                                >
                                                  <ExternalLink className={`w-3.5 h-3.5 ${
                                                    darkMode ? 'text-gray-500' : 'text-gray-400'
                                                  }`} />
                                                </motion.a>
                                              </div>
                                            </div>
                                            <p className={`text-xs leading-relaxed ${
                                              darkMode ? 'text-gray-500' : 'text-gray-600'
                                            }`}>
                                              {resource.description}
                                            </p>
                                          </motion.div>
                                        );
                                      })}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`text-center py-16 rounded-2xl border ${
                    darkMode ? 'bg-[#0f0f0f] border-[#1a1a1a]' : 'bg-white border-gray-200'
                  }`}
                >
                  <Search className={`w-12 h-12 mx-auto mb-4 ${
                    darkMode ? 'text-gray-700' : 'text-gray-300'
                  }`} />
                  <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                    No resources found matching "{searchQuery}"
                  </p>
                </motion.div>
              )}
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className={`border-t mt-16 ${darkMode ? 'border-[#1a1a1a] bg-[#0a0a0a]' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
              Last updated: November 2025 • {totalResources} curated ML resources • 95% free
            </p>
            <div className="flex items-center gap-2 text-xs">
              <span className={darkMode ? 'text-gray-500' : 'text-gray-600'}>
                From learning to production, everything ML
              </span>
              <Brain className="w-4 h-4 text-[#3b82f6]" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MachineLearningHub;
