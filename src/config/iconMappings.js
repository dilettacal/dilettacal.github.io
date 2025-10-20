/**
 * Icon mappings for custom SVG React components
 * This keeps icon imports in code while allowing JSON to reference them by key
 */

// Custom skill icons (import SVGs as React components for color control)
import {ReactComponent as PysparkIcon} from "../assets/images/simpleicons/apachespark.svg";
import {ReactComponent as KubernetesIcon} from "../assets/images/simpleicons/kubernetes.svg";
import {ReactComponent as DatabricksIcon} from "../assets/images/simpleicons/databricks.svg";
import {ReactComponent as HuggingfaceIcon} from "../assets/images/simpleicons/huggingface.svg";
import {ReactComponent as LangchainIcon} from "../assets/images/simpleicons/langchain.svg";
import {ReactComponent as CrewaiIcon} from "../assets/images/simpleicons/crewai.svg";
import {ReactComponent as GradioIcon} from "../assets/images/simpleicons/gradio.svg";
import {ReactComponent as AnthropicIcon} from "../assets/images/simpleicons/anthropic.svg";
import {ReactComponent as OpenaiIcon} from "../assets/images/simpleicons/openai.svg";
import {ReactComponent as PostgreSQLIcon} from "../assets/images/simpleicons/postgresql.svg";
import {ReactComponent as GithubActionsIcon} from "../assets/images/simpleicons/githubactions.svg";
import {ReactComponent as AzureIcon} from "../assets/images/svgrepo/azure-icon-svgrepo-com-grey.svg";
import {ReactComponent as PytorchIcon} from "../assets/images/simpleicons/pytorch.svg";
import {ReactComponent as SpacyIcon} from "../assets/images/simpleicons/spacy.svg";
import {ReactComponent as TerraformIcon} from "../assets/images/simpleicons/terraform.svg";
import {ReactComponent as NextdotjsIcon} from "../assets/images/simpleicons/nextdotjs.svg";
import {ReactComponent as TailwindcssIcon} from "../assets/images/simpleicons/tailwindcss.svg";
import {ReactComponent as StreamlitIcon} from "../assets/images/simpleicons/streamlit.svg";
import {ReactComponent as RedisIcon} from "../assets/images/simpleicons/redis.svg";
import {ReactComponent as ApachekafkaIcon} from "../assets/images/simpleicons/apachekafka.svg";
import {ReactComponent as JupyterIcon} from "../assets/images/simpleicons/jupyter.svg";
import {ReactComponent as MongodbIcon} from "../assets/images/simpleicons/mongodb.svg";
import {ReactComponent as NewrelicIcon} from "../assets/images/simpleicons/newrelic.svg";
import {ReactComponent as PytestIcon} from "../assets/images/simpleicons/pytest.svg";
import {ReactComponent as NumpyIcon} from "../assets/images/simpleicons/numpy.svg";
import {ReactComponent as PandasIcon} from "../assets/images/simpleicons/pandas.svg";
import {ReactComponent as OllamaIcon} from "../assets/images/simpleicons/ollama.svg";
import {ReactComponent as CanvaIcon} from "../assets/images/svgrepo/canva-svgrepo-com.svg";
import {ReactComponent as AdobeInDesignIcon} from "../assets/images/svgrepo/adobe-indesign-logo-svgrepo-com.svg";

export const customIcons = {
  // AI/ML
  openai: OpenaiIcon,
  anthropic: AnthropicIcon,
  ollama: OllamaIcon,
  huggingface: HuggingfaceIcon,
  pytorch: PytorchIcon,
  
  // Data Engineering
  pyspark: PysparkIcon,
  databricks: DatabricksIcon,
  pandas: PandasIcon,
  numpy: NumpyIcon,
  
  // Databases
  postgresql: PostgreSQLIcon,
  mongodb: MongodbIcon,
  redis: RedisIcon,
  
  // Cloud & DevOps
  azure: AzureIcon,
  kubernetes: KubernetesIcon,
  terraform: TerraformIcon,
  githubactions: GithubActionsIcon,
  
  // Streaming & Processing
  apachekafka: ApachekafkaIcon,
  
  // Monitoring & Testing
  newrelic: NewrelicIcon,
  pytest: PytestIcon,
  
  // NLP & AI Frameworks
  spacy: SpacyIcon,
  langchain: LangchainIcon,
  crewai: CrewaiIcon,
  
  // Tools & IDEs
  jupyter: JupyterIcon,
  
  // Frontend & Design
  nextdotjs: NextdotjsIcon,
  tailwindcss: TailwindcssIcon,
  gradio: GradioIcon,
  streamlit: StreamlitIcon,
  canva: CanvaIcon,
  adobeindesign: AdobeInDesignIcon
};

